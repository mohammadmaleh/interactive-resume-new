import React, { ReactElement, useState } from "react";
import { PageContainer } from "../../components/UI/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import ProjectsFilters from "./components/ProjectsFilters";
import Projects from "./components/Projects";
import { projectsData } from "../../constants/data";
import { ProjectType } from "../../types";

interface Props {}

// Projects ordered by importance (most impactful / most relevant to a
// fullstack + product direction first). Names are unique, so we rank by name.
const PROJECT_IMPORTANCE_ORDER = [
  "CELUS",
  "Interaudi",
  "Kambo",
  "Partners Portal",
  "ProPlan",
  "My Kredit",
  "Warehouse System",
  "Kambo Exchange",
  "Family Track",
  "Interactive Resume",
  "Avante",
  "Fincan",
  "Papilla",
  "Global Energy",
  "Rosetta",
  "Trakya",
  "Istanbul Cosmetic Clinic",
  "Chat Track",
  "Trust The Process",
  "Insta Likes Trader",
  "Ticker",
];

const rankOf = (name: string) => {
  const index = PROJECT_IMPORTANCE_ORDER.indexOf(name);
  return index === -1 ? PROJECT_IMPORTANCE_ORDER.length : index;
};

const sortByImportance = (projects: ProjectType[]): ProjectType[] =>
  [...projects].sort((a, b) => rankOf(a.name) - rankOf(b.name));

const ProjectsPage = (): ReactElement => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjectsData, setFilteredProjectsData] = useState<
    ProjectType[]
  >(sortByImportance(projectsData));

  const selectProjectTag = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "All") setFilteredProjectsData(sortByImportance(projectsData));
    else {
      const filteredProjectsData = projectsData.filter((project) =>
        project.tags.includes(tag)
      );
      setFilteredProjectsData(sortByImportance(filteredProjectsData));
    }
  };

  return (
    <PageContainer>
      <Title mainTitle>Projects</Title>

      <ProjectsFilters
        selectProjectTag={selectProjectTag}
        selectedTag={selectedTag}
      />
      <Projects projectsData={filteredProjectsData} />
    </PageContainer>
  );
};
export default ProjectsPage;
