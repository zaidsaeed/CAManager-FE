import { Dispatch, SetStateAction } from "react";

export type AppContextState = {
  user: {
    email: String;
  };
  setUser: Dispatch<SetStateAction<{ email: string }>>;
};
