import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Searchbar from "./Searchbar";

const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <Searchbar />
      <Outlet />
    </div>
  );
};

export default Layout;
