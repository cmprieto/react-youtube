import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Searchbar from "./Searchbar";
import BottomMenu from "../components/BottomMenu";
import {useLocalStorage} from '@uidotdev/usehooks';

const Layout = () => {
  const [theme] = useLocalStorage("theme","");
  return (
    <div className={`container${theme}`}>
      <NavBar />
      <Searchbar />
      <Outlet />
      <BottomMenu/>
    </div>
  );
};

export default Layout;
