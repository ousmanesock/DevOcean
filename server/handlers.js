const { MongoClient, ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const {
  workspaces,
  taskList,
  tasks,
  document,
  users,
  threads,
  teams,
} = require("./data");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addTeam = async (req, res) => {
  const newId = uuidv4();
  const client = new MongoClient(MONGO_URI, options);
  const { name, members, project } = req.body;
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Teams").insertOne({
      name: name,
      members: members,
      project: project,
    });
    console.log(result);

    res.status(200).json({ status: 200, message: "Team added", data: "added" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getTeam = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const teamId = req.params.teamId;
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const collection = db.collection("Teams");
    const teamDetails = await collection.findOne({
      _id: ObjectId(teamId),
    });
    console.log(
      "🚀 ~ file: handlers.js ~ line 369 ~ getTaskList ~ result",
      teamDetails
    );

    const memberIds = teamDetails.members;
    // const getWorkSpace = await db.collection("Workspaces").findOne({
    //   _id: ObjectId(teamDetails.workSpaceId),
    // });

    const members = [];

    for (const userId of memberIds) {
      const user = await db.collection("Users").findOne({
        _id: ObjectId(userId),
      });
      members.push(user);
    }

    const data = {
      team: teamDetails,
      members: members,
    };

    res.status(200).json({ status: 200, message: "success", data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getTeams = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const collection = db.collection("Teams");
    const teams = await collection.find().toArray();
    console.log(
      "🚀 ~ file: handlers.js ~ line 369 ~ getTaskList ~ result",
      teams
    );
    const workspace = [];
    const members = [];

    const allTeams = [];
    for (const team of teams) {
      const getWorkspace = await db.collection("Workspaces").findOne({
        _id: ObjectId(team.project),
      });
      console.log(
        "🚀 ~ file: handlers.js ~ line 113 ~ getWorkspace ~ getWorkspace",
        getWorkspace
      );
      const users = team.members;
      for (const user of users) {
        const member = await db.collection("Users").findOne({
          _id: ObjectId(user),
        });
        console.log(
          "🚀 ~ file: handlers.js ~ line 118 ~ member ~ member",
          member
        );
        members.push(member);
      }
      const data = {
        team: team,
        workspace: getWorkspace,
        members: members,
      };
      allTeams.push(data);
    }

    res.status(200).json({ status: 200, message: "success", data: allTeams });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getWorkspace = async (req, res) => {
  const workSpaceId = req.params.workspace;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db
      .collection("Workspaces")
      .findOne({ _id: workSpaceId });
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getWorkspaces = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const workspaces = await db.collection("Workspaces").find().toArray();
    const allWorkspaces = [];
    const documents = [];
    for (const workspace of workspaces) {
      const getTeam = await db.collection("Teams").findOne({
        _id: ObjectId(workspace.team),
      });
      console.log(
        "🚀 ~ file: handlers.js ~ line 113 ~ getWorkspace ~ getWorkspace",
        getTeam
      );
      const documents = workspace.documents;
      for (const documentId of documents) {
        const document = await db.collection("Documents").findOne({
          _id: ObjectId(documentId),
        });
        console.log(
          "🚀 ~ file: handlers.js ~ line 118 ~ member ~ member",
          document
        );
        documents.push(document);
      }
      const data = {
        workspace: workspace,
        team: getTeam,
        documents: documents,
      };
      allWorkspaces.push(data);
    }
    console.log(workspaces);
    res
      .status(200)
      .json({ status: 200, message: "success", data: allWorkspaces });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addWorkspace = async (req, res) => {
  const { documents, team, project_name, status } = req.body;
  console.log(req.body);
  const newId = uuidv4();
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    // for (const workspace of workspaces) {
    const result = await db.collection("Workspaces").insertOne({
      project_name,
      documents,
      team,
      status,
    });
    console.log(result);
    // }
    console.log(workspaces);

    res
      .status(200)
      .json({ status: 200, message: "Workspace added", data: "added" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const updateWorkspace = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Workspaces").updateOne();
    console.log(result);
    res
      .status(200)
      .json({ status: 200, message: "Workspace updated", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const deleteWorkspace = async (req, res) => {
  const workSpaceId = req.params.workspace;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Workspaces").deleteOne();
    console.log(result);
    res
      .status(200)
      .json({ status: 200, message: "Workspace deleted", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const user = await db.collection("Users").findOne({ email: email });

    if (!user)
      return res.status(401).json({
        msg:
          "The email address " +
          email +
          " is not associated with any account. Double-check your email address and try again.",
      });

    //validate password
    if (!user.comparePassword(password))
      return res.status(401).json({ message: "Invalid email or password" });

    // Make sure the user has been verified
    if (!user.isVerified)
      return res.status(401).json({
        type: "not-verified",
        message: "Your account has not been verified.",
      });

    // Login successful, write token, and send back user
    // res.status(200).json({ token: user.generateJWT(), user: user });
    // res.status(200).json({ token: user.generateJWT(), user: user });

    res.status(200).json({ status: 200, message: "success", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getUser = async (req, res) => {
  const user = req.params.user;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Users").findOne({ name: user });
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Users").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addUserList = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    for (user of users) {
      const result = await db.collection("Users").insertOne({
        name: user.name,
        email: user.email,
        password: user.hashedPassword,
      });
      console.log(result);
    }

    res
      .status(201)
      .json({ status: 201, message: "User added", data: "user added" });
  } catch (error) {
    res
      .status(400)
      .json({ status: 400, message: "User not added", data: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addUser = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const alreadyExists = await db.collection("Users").findOne({ email });
    if (alreadyExists) {
      res
        .status(200)
        .json({ status: 200, message: "User logged in", data: alreadyExists });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      console.log(hashedPassword);
      const result = await db
        .collection("Users")
        .insertOne({ email, hashedPassword });
      console.log(result);
      res
        .status(201)
        .json({ status: 201, message: "User added", data: result });
    }
  } catch (error) {
    res
      .status(400)
      .json({ status: 400, message: "User not added", data: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

// const updateUser = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   try {
//     await client.connect();
//     console.log("Connected");
//     const db = client.db("DevOcean");
//     const result = await db.collection("Users").updateOne();
//     console.log(result);
//     res
//       .status(200)
//       .json({ status: 200, message: "User updated", data: result });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.close();
//     console.log("Disconnected");
//   }
// };
// const removeUser = async (req, res) => {
//   const workSpaceId = req.params.workspace;
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//     await client.connect();
//     console.log("Connected");
//     const db = client.db("DevOcean");
//     const result = await db.collection("Workspaces").deleteOne();
//     console.log(result);
//     res
//       .status(200)
//       .json({ status: 200, message: "User removed", data: result });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.close();
//     console.log("Disconnected");
//   }
// };

const getThread = async (req, res) => {
  const threadId = req.params.threadId;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Threads").findOne({ _id: threadId });
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};
const getThreads = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Threads").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addThread = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    for (const thread of threads) {
      const result = await db.collection("Threads").insertOne({
        workspaceId: thread.workspaceId,
        thread: thread.thread,
      });
      console.log(result);
    }

    res
      .status(200)
      .json({ status: 200, message: "success", data: "thread added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

// const updateThread = async (req, res) => {};
// const removeThread = async (req, res) => {};

const getTaskList = async (req, res) => {
  const tasklistId = req.params.tasklist;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const collection = db.collection("TaskLists");
    const taskList = await collection.findOne({
      // workSpaceId: "634eef3f77c1adbf720898f4",
      _id: ObjectId(tasklistId),
    });
    console.log(
      "🚀 ~ file: handlers.js ~ line 369 ~ getTaskList ~ result",
      taskList
    );

    const taskIds = taskList.tasks;
    const getWorkSpace = await db.collection("Workspaces").findOne({
      _id: ObjectId(taskList.workSpaceId),
    });

    const tasks = [];

    for (const taskId of taskIds) {
      const getTask = await db.collection("tasks").findOne({
        _id: ObjectId(taskId),
      });
      tasks.push(getTask);
    }

    const data = {
      taskList: taskList,
      workspace: getWorkSpace,
      tasks: tasks,
    };

    res.status(200).json({ status: 200, message: "success", data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
};

const getTaskLists = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("TaskLists").find().toArray();
    const taskLists = [];
    const taskss = [];
    for (const tasklist of result) {
      const getWorkSpace = await db.collection("Workspaces").findOne({
        _id: ObjectId(tasklist.workSpaceId),
      });
      const tasks = tasklist.tasks;
      for (const task of tasks) {
        const taskDetail = await db.collection("tasks").findOne({
          _id: ObjectId(task),
        });
        console.log(
          "🚀 ~ file: handlers.js ~ line 118 ~ member ~ member",
          taskDetail
        );
        taskss.push(taskDetail);
      }
      const data = {
        taskList: tasklist,
        workspace: getWorkSpace,
        tasks: taskss,
      };
      taskLists.push(data);
    }

    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: taskLists });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addTaskList = async (req, res) => {
  const { _id, workSpaceId, task, assigned_to, status } = req.body;
  console.log(req.body);
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    for (const task of taskList) {
      const result = await db.collection("TaskLists").insertOne({
        workSpaceId: task.workspaceId,
        tasks: task.tasks,
      });
      console.log(result);
    }

    res.status(200).json({
      status: 200,
      message: "Task list added",
      data: "Task list added",
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getTask = async (req, res) => {
  const task = req.params.taskId;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const collection = db.collection("tasks");
    const taskDetails = await collection.findOne({
      _id: ObjectId(task),
    });
    console.log(
      "🚀 ~ file: handlers.js ~ line 369 ~ getTaskList ~ result",
      taskDetails
    );
    res
      .status(200)
      .json({ status: 200, message: "success", data: taskDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
};

const getTasks = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const collection = db.collection("tasks");
    const tasks = await collection.find().toArray();
    console.log(
      "🚀 ~ file: handlers.js ~ line 369 ~ getTaskList ~ result",
      tasks
    );
    res.status(200).json({ status: 200, message: "success", data: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
};

const addTask = async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    for (const task of tasks) {
      const result = await db.collection("tasks").insertOne({
        name: task.name,
        assignedTo: task.assigned_to,
        status: task.status,
        priority: task.priority,
      });
      console.log(result);
    }

    res
      .status(200)
      .json({ status: 200, message: "Task added", data: "Task added" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

// const updateTask = async (req, res) => {};
// const removeTask = async (req, res) => {};

const getDocument = async (req, res) => {
  const doc = req.params.doc;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Documents").findOne({ _id: doc });
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const getDocuments = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Documents").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addDocument = async (req, res) => {
  const { _id, body, title, addedBy } = req.body;
  console.log(req.body);
  const newId = uuidv4();
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    for (const document of documents) {
      const result = await db.collection("Documents").insertOne({
        body: document.body,
        title: document.title,
      });
      console.log(result);
    }
    res
      .status(200)
      .json({ status: 200, message: "Document added", data: "Document added" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const updateDocument = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Documents").updateOne();
    console.log(result);
    res
      .status(200)
      .json({ status: 200, message: "Document updated", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const deleteDocument = async (req, res) => {
  const workSpaceId = req.params.workspace;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Documents").deleteOne();
    console.log(result);
    res
      .status(200)
      .json({ status: 200, message: "Document deleted", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

module.exports = {
  login,
  addTeam,
  getWorkspace,
  getWorkspaces,
  addWorkspace,
  updateWorkspace,
  deleteWorkspace,
  addUser,
  getUser,
  getUsers,
  addTaskList,
  getTaskList,
  getTaskLists,
  getDocument,
  getDocuments,
  addDocument,
  getTasks,
  getTask,
  addTask,
  addUserList,
  getThread,
  getThreads,
  addThread,
  getTeam,
  getTeams,
};
