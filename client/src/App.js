import * as React from "react";
import Login from "./SignIn/Login";
import Header from "./SignIn/Header";
import HomeScreen from "./Home/HomeScreen";
import TaskLists from "./Home/Tasks/TaskLists";
import AllDocs from "./Home/Documents/AllDocs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workspaces from "./Home/Workspaces/Workspaces.js";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/tasks" element={<TaskLists />} />
        <Route path="/docs" element={<AllDocs />} />
      </Routes>
    </Router>
  );
};

export default App;
