import styled from "styled-components";
import TaskList from "../Tasks/TaskList";

const Workspace = ({ workspaces }) => {
  return (
    workspaces && (
      <Wrapper>
        <div>{workspaces.project_name}</div>
        <Docs>
          {workspaces.document.map((doc) => {
            return <div>{doc}</div>;
          })}
        </Docs>
        <TaskList></TaskList>
        <Thread></Thread>
      </Wrapper>
    )
  );
};
export default Workspace;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Docs = styled.div``;
const Thread = styled.div``;
