import React, { ReactElement } from "react";
import {
  Routes as RouterRoutes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Home, User } from "@styled-icons/boxicons-regular";
import { Work } from "@styled-icons/material";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Contact } from "@styled-icons/boxicons-solid/Contact";
import HomePage from "./containers/HomePage/HomePage";
import AboutMePage from "./containers/AboutMePage/AboutMePage";
import ExperiencePage from "./containers/ExperiencePage/ExperiencePage";
import ContactPage from "./containers/ContactPage/ContactPage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
interface Props {}

export const pages = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: Home,
    component: HomePage,
  },
  {
    id: 2,
    name: "About Me",
    link: "/about-me",
    icon: User,
    component: AboutMePage,
  },
  {
    id: 3,
    name: "Experience",
    link: "/experience",
    icon: Work,
    component: ExperiencePage,
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
    icon: Javascript,
    component: ProjectsPage,
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
    icon: Contact,
    component: ContactPage,
  },
];
export default function Routes({}: Props): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "auto",
      }}
    >
      <RouterRoutes>
        {pages.map((page) => (
          <Route key={page.id} path={page.link} element={<page.component />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    </div>
  );
}
