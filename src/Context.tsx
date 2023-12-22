import React, { createContext, useState, FC } from "react";
import { AppContextState } from "./AppContextState";

export const contextDefaultValues: AppContextState = {
  user: {
    email: "",
  },
  setUser: () => console.log("Default user"),
};

export const AppContext = createContext<AppContextState>(contextDefaultValues);
