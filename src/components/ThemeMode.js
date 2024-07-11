import {useUserContext} from '../providers/UserProvider';
import dia from "../assets/icon/dia.png";
import noche from "../assets/icon/noche.png";

const ThemeMode = () => {
    const {theme, setTheme}=useUserContext();
    const handleTheme=()=>{
        setTheme(theme==='--light'?'':'--light');
    }
    return (
    <div className="switch-button">
    {/* <!-- Checkbox --> */}
    
    {theme==='--light'? <img src={dia} onClick={handleTheme} alt='dia'></img>: <img src={noche} onClick={handleTheme} alt='noche' ></img>}


    {/* Botón  */}</div>
  );
};

export default ThemeMode;