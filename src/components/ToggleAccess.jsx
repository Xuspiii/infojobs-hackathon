import { useContext } from "react";
import { RoleContext } from "../context/role";
import "./toggle-access.css"

export function ToggleAccess() {
  const { role, setRole } = useContext(RoleContext);

  

  return (
    <div className="toggle-access">

      {role === "company" ? (
        <span className="role-disclaimer">Estás en modo empresa</span>
      ) : (
        <button className="white-button" onClick={() => setRole("company")}>Acceso empresas</button>
      )}

      {role === "candidate" ? (
        <span className="role-disclaimer">Estás en modo candidato</span>
      ) : (
        <button className="blue-button" onClick={() => setRole("candidate")}>Acceso candidatos</button>
      )}
    </div>
  );
}
