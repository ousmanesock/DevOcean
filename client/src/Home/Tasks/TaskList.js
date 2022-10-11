import styled from "styled-components";

const TaskList = ({ tasklist }) => {
  return (
    tasklist && (
      <Wrapper>
        <div>
          {tasklist.task.map((task) => {
            return <div>{task}</div>;
          })}
        </div>
      </Wrapper>
    )
  );
};
export default TaskList;

const Wrapper = styled.div``;
