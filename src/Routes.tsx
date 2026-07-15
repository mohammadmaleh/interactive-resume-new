import React, { ReactElement } from "react";
import {
  Routes as RouterRoutes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
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
  const location = useLocation();
  const transitions = useTransition(location, {
    keys: location.pathname,
    from: { opacity: 0, transform: "translateX(40px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-40px)" },
    config: { tension: 220, friction: 26 },
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {transitions((style, item) => (
        <animated.div
          style={{
            ...style,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <RouterRoutes location={item}>
            {pages.map((page) => (
              <Route
                key={page.id}
                path={page.link}
                element={<page.component />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </RouterRoutes>
        </animated.div>
      ))}
    </div>
  );
}
