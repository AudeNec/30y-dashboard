import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
}

export default App;
