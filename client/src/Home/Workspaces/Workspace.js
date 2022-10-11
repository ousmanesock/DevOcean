import styled from "styled-components";

const Workspace = ({ workspace }) => {
  return (
    workspace && (
      <Wrapper>
        <div>{workspace.project_name}</div>
        <Docs>
          {workspace.document.map((doc) => {
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
const TaskList = styled.div``;
const Thread = styled.div``;
