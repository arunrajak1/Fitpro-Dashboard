
import "./App.css";
import Home from "./componets/Home";
import SideNavbar from "./componets/SideNavbar";

function App() {
  return (
    <div className="flex bg-dark-purple">
      <div className="basis-[20%] h-[100vh]">
        <SideNavbar  />
      </div>
      <div className="basis-[80%]">
      <Home/>
      </div>
    </div>
  );
}

export default App;
