const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const {
  addTeam,
  login,
  addUser,
  getUser,
  getUsers,
  getWorkspace,
  getWorkspaces,
  addWorkspace,
  updateWorkspace,
  deleteWorkspace,
  getTaskList,
  getTaskLists,
  addTaskList,
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
} = require("./handlers");
express()
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.json())
  .get("/DevOcean", (req, res) => {
    res.status(200).json({ status: 200, message: "Welcome!" });
  })
  .post("/login", login)
  .get("/user/:user", getUser)
  .get("/users", getUsers)
  .post("/addUser", addUser)
  .post("/addUserList", addUserList)
  .get("/thread", getThreads)
  .get("/thread/:threadId", getThread)
  .post("/addThread", addThread)
  .get("/workspace/:workspace", getWorkspace)
  .get("/workspaces", getWorkspaces)
  .post("/workspaces/addWorkspace", addWorkspace)
  .patch("/workspaces/updateWorkspace", updateWorkspace)
  .delete("/workspaces/deleteWorkspace", deleteWorkspace)
  .get("/tasklist/:tasklist", getTaskList)
  .get("/tasklists", getTaskLists)
  .post("/addTaskList", addTaskList)
  .get("/document/:document", getDocument)
  .get("/documents", getDocuments)
  .post("/addDocument", addDocument)
  .get("/tasks", getTasks)
  .get("/task/:taskId", getTask)
  .post("/addTask", addTask)
  .get("/team/:teamId", getTeam)
  .get("/teams", getTeams)
  .post("/addTeam", addTeam)

  .listen(8000, () => {
    console.log(`Server launched on port 8000`);
  });
