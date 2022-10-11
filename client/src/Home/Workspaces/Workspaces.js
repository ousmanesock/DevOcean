import { useEffect, useState } from "react";
import Workspace from "./Workspace";
const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState(null);
  useEffect(() => {
    fetch(`/workspaces`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkspaces(data.data);
      });
  }, []);
  console.log(workspaces);

  return (
    <>
      {workspaces&&
      workspaces.map((workspace) => {
        return <Workspace workspace={workspace} />;
      })}
    </>
  );
};
export default Workspaces;
