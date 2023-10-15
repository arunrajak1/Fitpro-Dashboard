import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import SideNavbar from "./componets/SideNavbar";

function App() {
  return (
    <div className="flex">
      <div className="basis-[20%] h-[100vh] bg-gray-100">
        <SideNavbar />
      </div>
      <div className="basis-[80%] bg-gray-100">
      <Home/>
      <Outlet>

      </Outlet>
      </div>
    </div>
  );
}

export default App;
