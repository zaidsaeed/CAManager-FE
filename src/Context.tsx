import React, { createContext, useState, FC } from "react";
import { AppContextState } from "./AppContextState";

const contextDefaultValues: AppContextState = {
  user: {},
  setUser: () => console.log("Default user")
};

const AppContext = createContext<AppContextState>(
  contextDefaultValues
);

export default AppContext;
