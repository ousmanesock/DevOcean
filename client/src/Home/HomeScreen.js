import Appbar from "./Appbar";
import Workspaces from "./Workspaces/Workspaces";
// import TaskLists from "./Tasks/TaskLists";
import styled from "styled-components";
const HomeScreen = () => {
  return (
    <Wrapper>
      <Appbar />
      <HomeSection>
        <Workspaces />
        {/* <TaskLists /> */}
        <Docs />
        <Threads />
      </HomeSection>
    </Wrapper>
  );
};
export default HomeScreen;

const Wrapper = styled.div``;
const HomeSection = styled.div``;
const Docs = styled.div``;
const TaskList = styled.div``;
const Threads = styled.div``;
