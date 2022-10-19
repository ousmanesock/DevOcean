import styled from "styled-components";

const TaskList = ({ tasklist }) => {
  console.log(tasklist);
  return (
    tasklist && (
      <Wrapper>
        <div>
          {tasklist.tasks.map((task) => {
            return <div>{task}</div>;
          })}
        </div>
      </Wrapper>
    )
  );
};
export default TaskList;

const Wrapper = styled.div``;
