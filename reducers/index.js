import { combineReducers } from "redux";
import tasks from "./tasks";
import searchLeads from "./searchLeads";
import users from "./users";
import userInfo from "./userInfo";
import projects from "./projects";
import properties from "./properties";
import requests from "./requests";

const rootReducer = combineReducers({
  tasks,
  searchLeads,
  users,
  userInfo,
  projects,
  properties,
  requests
});

export default rootReducer;
