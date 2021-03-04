import { combineReducers } from "redux";
import tasks from "./tasks";
import searchLeads from "./searchLeads";
import users from "./users";
import userInfo from "./userInfo";
import projects from "./projects";

const rootReducer = combineReducers({
  tasks,
  searchLeads,
  users,
  userInfo,
  projects
});

export default rootReducer;
