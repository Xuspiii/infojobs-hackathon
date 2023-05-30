import { useContext } from "react";
import "./header.css";
import { ToggleAccess } from "./ToggleAccess";
import { RoleContext } from "../context/role";

export function Header() {

  const { setRole } = useContext(RoleContext)

  return (
    <header className="header">
      <img className="logo" src="infojobs-logo.svg" width="100" height="25" alt="infojobs" onClick={() => setRole("")}/>
      <ToggleAccess />
    </header>
  );
}
