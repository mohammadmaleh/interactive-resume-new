import React from "react";
import { AppStateType } from "../types";
export default React.createContext<AppStateType>({
  projectDetails: {
    changeSelectedProjectDetails: (id?: number): void => {},
  },
});
