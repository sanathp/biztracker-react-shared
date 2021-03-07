import React, { Component } from "react";
import AuthContext from "../utils/authContext";
import { API } from 'aws-amplify';
import ProjectReports from "../../components/ProjectReports";
import { connect } from "react-redux";
import { getTasksAction } from "../actions/tasksActions";
import { getUsersAction } from "../actions/usersActions";
import { getProjectsAction } from "../actions/projectsActions";
import { capitalizeFirstLetter } from '../utils';
import {
  MONTHLY_REPORT_TEXT,
  DATE_RANGE_REPORT_TEXT,
  OVERALL_REPORT_TEXT,
  OVERALL_REPORT_TYPE,
  MONTHLY_REPORT_TYPE,
  DATE_RANGE_REPORT_TYPE,
  MonthsArray
} from '../constants';
   
class ProjectReportsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPending: true,
      isError: false,
      overallReports: {},
    };

    this.getReports = this.getReports.bind(this);

    this.getProjectName = this.getProjectName.bind(this);
  }

  getReports(projectId, filterBy, filterMonth, filterYear, startDate, endDate) {
    this.setState({ isPending: true, isError: false });
    let startTimestamp = 0;
    let endTimestamp = 0;
    let m = 0;
    for (let index = 0; index < MonthsArray.length; index++) {
      if (filterMonth == MonthsArray[index]) {
        m = index;
        break;
      }
    }

    let reportType = "";
    if (filterBy == DATE_RANGE_REPORT_TEXT) {
      reportType = DATE_RANGE_REPORT_TYPE;
      startTimestamp = Math.floor(startDate.getTime() / 1000);
      endTimestamp = Math.floor(endDate.getTime() / 1000);
      if (startTimestamp > endTimestamp) {
        this.props.showMessage("End date should be greater than start date", 3000);
        this.setState({ isPending: false, isError: false });
        return;
      }
    } else if (filterBy == OVERALL_REPORT_TEXT) {
      reportType = OVERALL_REPORT_TYPE;
    } else if (filterBy == MONTHLY_REPORT_TEXT) { 
      reportType = MONTHLY_REPORT_TYPE;
      var date = new Date(), y = date.getFullYear();
      startTimestamp = Math.floor(new Date(y, m, 1).getTime() / 1000);
      endTimestamp = Math.floor(new Date(y, m + 1, 0).getTime() / 1000);
    } else {
      return;
    }
    let myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
      queryStringParameters: {  // OPTIONAL
        type: reportType,
        month: m + 1,
        year: filterYear,
        startTimestamp: startTimestamp,
        endTimestamp: endTimestamp,
        clientId: this.context.clientId,
        projectId: projectId
      }
    };
    API.get("reports", "/reports", myInit).then(response => {
      // Add your code here
      console.log("monthly reports", response);
      this.setState({ isPending: false, reportsResponse: response });
    }).catch(error => {
      console.log("monthly reports", error)
      this.setState({ isPending: false, isError: true });
      console.log(error.response)
    });
  }

  getProjectName = (projectId) => {
    for (const project of this.props.projects.data) {
      if (project.projectId == projectId) {
        return capitalizeFirstLetter(project.name);
      }
    }
     
    return "<Project Name>";
  }


  render() {

    return <ProjectReports  
              isError={this.state.isError}
              isPending={this.state.isPending}
              reportsResponse={this.state.reportsResponse}
              getProjectName={this.getProjectName}
              getReports={this.getReports}
              projects={this.props.projects}
           />;
  }
}

ProjectReportsContainer.contextType = AuthContext;


function mapStateToProps(state) {
  return {
    reports: state.tasks,
    userInfo: state.userInfo,
    users: state.users,
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: function(userId) {
      dispatch(getTasksAction(userId));
    },
    getUsers: function (clientId) {
      dispatch(getUsersAction(clientId))
    },
    getProjects: function (clientId) {
      dispatch(getProjectsAction(clientId))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectReportsContainer);
