import React, { Component } from "react";
import Background from "./components/UI/Background/Background";
import MainContainer from "./containers/MainContainer/MainContainer";
import ResumeContext from "./context/resume.context";
import ProjectDetails from "./containers/ProjectDetails/ProjectDetails";
import MetaTags from "./components/MetaTags/MetaTags";
import { AppStateType } from "./types";
import { projectsData } from "./constants/data";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
class App extends Component<any, any> {
  changeSelectedProjectDetails = (id?: number): void => {
    if (id) {
      const newSelectedProject = projectsData.find(
        (project) => project.id === id
      );
      this.setState((prevState: React.ComponentState) => ({
        ...prevState,
        projectDetails: {
          ...prevState.projectDetails,
          selectedProjectDetails: newSelectedProject,
        },
      }));
    } else {
      this.setState((prevState: React.ComponentState) => ({
        ...prevState,
        projectDetails: {
          ...prevState.projectDetails,
          selectedProjectDetails: undefined,
        },
      }));
    }
  };
  state: AppStateType = {
    projectDetails: {
      changeSelectedProjectDetails: this.changeSelectedProjectDetails,
    },
  };
  render() {
    return (
      <Container data-test="app">
        <ResumeContext.Provider value={this.state}>
          <MetaTags />
          <Background />
          <MainContainer />
          <ProjectDetails />
        </ResumeContext.Provider>
      </Container>
    );
  }
}

export default App;
