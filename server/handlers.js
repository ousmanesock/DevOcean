const { MongoClient, objectId } = require("mongodb");
const bcrypt = require("bcrypt");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
    const result = await db.collection("Workspaces").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addWorkspace = async (req, res) => {
  const { _id, documents, tasks, team_members, project_name } = req.body;
  console.log(req.body);
  const newId = uuidv4();
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Workspaces").insertOne({
      _id,
      id: newId,
      project_name,
      team_members,
      tasks,
      documents,
    });
    console.log(result);
    res
      .status(200)
      .json({ status: 200, message: "Workspace added", data: result });
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
  const workSpaceId = req.params.workspace;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("Threads").findOne({ _id: workSpaceId });
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
// const addThread = async (req, res) => {};
// const updateThread = async (req, res) => {};
// const removeThread = async (req, res) => {};

const getTaskList = async (req, res) => {
  const workSpaceId = req.params.workspace;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db
      .collection("TaskLists")
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

const getTaskLists = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("DevOcean");
    const result = await db.collection("TaskLists").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, message: "success", data: result });
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
    const result = await db.collection("TaskLists").insertOne({
      _id,
      workSpaceId,
      task,
      assigned_to,
      status,
    });
    console.log(result);
    res.status(200).json({ status: 200, message: "Task added", data: result });
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

// const getTask = async (req, res) => {};
// const getTask = async (req, res) => {};
// const addTask = async (req, res) => {};
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
    const result = await db.collection("Workspaces").insertOne({
      _id: newId,
      body,
      title,
      addedBy,
    });
    console.log(result);
    res
      .status(200)
      .json({ status: 200, message: "Document added", data: result });
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
};
