import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useApp() {
  const context = useContext(AppContext);
  const { dispatch, state } = context;

  if (!context) throw new Error("App Context was used outside the provider");

  return { dispatch, state };
}
