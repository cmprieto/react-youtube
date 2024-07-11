import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Searchbar from "./Searchbar";
import {useUserContext} from '../providers/UserProvider';

const Layout = () => {
  const {theme}=useUserContext();
  return (
    <div className={`container${theme}`}>
      <NavBar />
      <Searchbar />
      <Outlet />
    </div>
  );
};

export default Layout;
