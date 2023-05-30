import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RoleProvider } from "./context/role.jsx";
import { OffersProvider } from "./context/offers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoleProvider>
    <OffersProvider>
      <App />
    </OffersProvider>
  </RoleProvider>
);
