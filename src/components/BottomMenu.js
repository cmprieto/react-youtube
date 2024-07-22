import { useUserContext } from "../providers/UserProvider";
import ThemeMode from "./ThemeMode";
import upBlack from "../assets/icon/top_black.png";
import upWhite from "../assets/icon/top_white.png";
import {useLocalStorage} from '@uidotdev/usehooks';

const BottomMenu = () => {
  const { handleKey } = useUserContext();
  const [theme] = useLocalStorage("theme","");


  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`bottomMenuContainer${theme}`}>
      {" "}
      <p>©2024 Carlos Prieto</p>
      <button
        type="button"
        className={`bottomMenuContainer--button${theme}`}
        onClick={handleKey}
      >
        <p className="button-footer">Key Changer</p>
      </button>
      {theme === "--light" ? (
        <img src={upWhite} onClick={handleUp} alt="dia"></img>
      ) : (
        <img src={upBlack} onClick={handleUp} alt="noche"></img>
      )}
      <ThemeMode />
    </div>
  );
};

export default BottomMenu;
