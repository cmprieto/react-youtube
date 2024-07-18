import dia from "../assets/icon/dia.png";
import noche from "../assets/icon/noche.png";
import {useLocalStorage} from '@uidotdev/usehooks';

const ThemeMode = () => {
    const [theme,setTheme] = useLocalStorage("theme","");
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