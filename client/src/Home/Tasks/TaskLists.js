import { useEffect, useState } from "react";
import TaskList from "./TaskList";
const TaskLists = () => {
  const [tasklists, setTaskLists] = useState([]);
  useEffect(() => {
    fetch(`/tasklists`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: " + data);
        setTaskLists(data.data);
      });
  }, []);
  console.log(tasklists);

  return (
    <>
      {tasklists.length &&
        tasklists.map((tasklist) => {
          return <TaskList tasklist={tasklist} />;
        })}
    </>
  );
};
export default TaskLists;
