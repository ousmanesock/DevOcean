import Appbar from "./Appbar";
import Workspaces from "./Workspaces/Workspaces";
import TaskLists from "./Tasks/TaskLists";
import styled from "styled-components";
import Sidebar from "../SideBar/sidebar";
import SidebarLayout from "react-advanced/SidebarLayout";

const HomeScreen = () => {
  return (
    // <Wrapper>
    <SidebarLayout Leftbar={Sidebar} Rightbar={Sidebar}>
      {({ toggleLeftbar, toggleRightbar }) => (
        <div>
          <Appbar
            toggleLeftbar={toggleLeftbar}
            toggleRightbar={toggleRightbar}
          />
          {/* <Content /> */}
        </div>
      )}
      {/* <Appbar />
        <Sidebar />
        <HomeSection>
          <Workspaces />
          <TaskLists />
          <Docs />
          <Threads />
        </HomeSection> */}
    </SidebarLayout>
    // </Wrapper>
  );
};
export default HomeScreen;

const Wrapper = styled.div``;
const HomeSection = styled.div``;
const Docs = styled.div``;
const TaskList = styled.div``;
const Threads = styled.div``;
