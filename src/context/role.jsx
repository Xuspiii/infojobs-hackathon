/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState("");

  return (
    <RoleContext.Provider value={{ role, setRole, }}> {children} </RoleContext.Provider>
  );
}
