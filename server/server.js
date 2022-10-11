const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const {
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
  addDocument
} = require("./handlers");
express()
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.json())
  .get("/final_project", (req, res) => {
    res.status(200).json({ status: 200, message: "Welcome!" });
  })
  .get("/:user", getUser)
  .get("/users", getUsers)
  .post("/addUser", addUser)
  .get("/workspace/:workspace", getWorkspace)
  .get("/workspaces", getWorkspaces)
  .post("/workspace/addWorkspace", addWorkspace)
  .patch("/workspace/updateWorkspace", updateWorkspace)
  .delete("/workspace/deleteWorkspace", deleteWorkspace)
  .get("/:tasklist", getTaskList)
  .get("/tasklists", getTaskLists)
  .post("/addTaskList", addTaskList)
  .get("/:document", getDocument)
  .get("/documents", getDocuments)
  .post("/addDocument", addDocument)
  .listen(8000, () => {
    console.log(`Server launched on port 8000`);
  });