import React, { useEffect, useState } from "react";
import Workspace from "./Workspace";
import axios from "axios";

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState(null);
  useEffect(() => {
    fetch(`/workspaces`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkspaces(data.data);
      });

    // axios.get('https://localhost:8000/workspaces')
    // 	.then(response => {
    // 		console.log("🚀 ~ file: Workspaces.js ~ line 17 ~ useEffect ~ response", response)
    // 		return setWorkspaces(response.data.total)
    // 	})
  }, []);
  console.log(workspaces);

  return (
    workspaces &&
    workspaces.map((workspace) => {
      return <Workspace workspace={workspace} />;
    })
  );
};
export default Workspaces;
