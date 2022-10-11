const TaskList = ({ tasklist }) => {
  return (
    tasklist && (
      <Wrapper>
        <div>
            {task.task.map((task)=>{
                return <div>{task}</div>
            })}
        </div>
        
      </Wrapper>
    )
  );
};
export default TaskList;
