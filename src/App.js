import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// container imports
import Header from "./components/header/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
