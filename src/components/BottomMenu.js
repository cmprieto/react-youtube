import { useUserContext } from "../providers/UserProvider";
import ThemeMode from "./ThemeMode";

const BottomMenu = () => {
  const { i, setI, theme } = useUserContext();
  const handleKey = () => {
    i < 2 ? setI((prevState) => prevState + 1) : setI(0);
  };
  return (
    <div className={`bottomMenuContainer${theme}`}>
      {" "}
      <button
        type="button"
        className={`bottomMenuContainer--button${theme}`}
        onClick={handleKey}
      >
        <p className="button-footer">Key Changer</p>
      </button>
      <ThemeMode />
    </div>
  );
};

export default BottomMenu;
