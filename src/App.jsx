import { useContext } from "react";
import { CompanyInterface } from "./pages/CompanyInterface";
import { CandidateInterface } from "./pages/CandidateInterface";
import { Homepage } from "./pages/Homepage";
import { RoleContext } from "./context/role";

function App() {
  const { role } = useContext(RoleContext);

  if (role === "company") return <CompanyInterface />;
  else if (role === "candidate") return <CandidateInterface />;
  else return <Homepage />;
}

export default App;
