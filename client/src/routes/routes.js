import Login from "../views/SignIn/Login";
import Header from "../components/Header/Header";
import HomeScreen from "../views/Home/HomeScreen";
import TaskLists from "../views/Tasklist/TaskLists";
import AllDocs from "../views/Documents/AllDocs";
import AddDocument from "../views/Documents/AddDoc";
import Workspaces from "../views/Workspaces/Workspaces";
import Teams from "../views/Teams/AllTeams";
import Members from "../views/Members/Members";
import Threads from "../views/Threads/Threads";
import AddWorkSpace from "../views/Workspaces/AddWorkSpace";
import AddTaskList from "../views/Tasklist/AddTasklist";
import AddTeam from "../views/Teams/AddTeam";
import AddMember from "../views/Members/AddMember";

const routes = [
  {
    id: 1,
    path: "/",
    component: Header,
    requireAuth: false,
  },
  {
    id: 2,
    path: "/login",
    component: Login,
    requireAuth: false,
  },
  {
    id: 3,
    path: "/home",
    component: HomeScreen,
    requireAuth: true,
  },
  {
    id: 4,
    path: "/taskLists",
    component: TaskLists,
    requireAuth: true,
  },
  {
    id: 5,
    path: "/docs",
    component: AllDocs,
    requireAuth: true,
  },
  {
    id: 6,
    path: "/workspaces",
    component: Workspaces,
    requireAuth: true,
  },
  {
    id: 7,
    path: "/teams",
    component: Teams,
    requireAuth: true,
  },
  {
    id: 8,
    path: "/members",
    component: Members,
    requireAuth: true,
  },
  {
    id: 9,
    path: "/threads",
    component: Threads,
    requireAuth: true,
  },
  {
    id: 10,
    path: "/addDoc",
    component: AddDocument,
    requireAuth: true,
  },
  {
    id: 11,
    path: "/addWorkspace",
    component: AddWorkSpace,
    requireAuth: true,
  },
  {
    id: 12,
    path: "/addTask",
    component: AddTaskList,
    requireAuth: true,
  },
  {
    id: 13,
    path: "/addTeam",
    component: AddTeam,
    requireAuth: true,
  },
  {
    id: 14,
    path: "/addMember",
    component: AddMember,
    requireAuth: true,
  },
];

export default routes;
