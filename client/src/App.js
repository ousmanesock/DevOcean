import * as React from "react";
import Login from "./SignIn/Login";
import Header from "./SignIn/Header";
import HomeScreen from "./Home/HomeScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/tasks" element={<TaskLists />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
};

export default App;
