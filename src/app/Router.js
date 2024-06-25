import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Video_detail from "../pages/Video_detail";
import Layout from "../components/Layout";
import TermLists from "../components/TermLists";
import VideoListFav from "../components/VideoListFav";
import VideoListChannel from "../components/VideoListChannel";


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {/*    ENVOLVER TODAS LAS RUTAS CON Route Layout */}
        <Route index path="/react-youtube" element={<Home />} />
        <Route path="/react-youtube/videodetail" element={<Video_detail />} />
        <Route path="/react-youtube/videodetail/:id" element={<Video_detail/>} />
        <Route path="/react-youtube/history/" element={<History/>} />
        <Route path="/react-youtube/favorites/" element={<VideoListFav/>} />
        <Route path="/react-youtube/channel/" element={<VideoListChannel/>} />
        <Route path="/react-youtube/channel/:id" element={<VideoListChannel/>} />
        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="/react-youtube/*" element={<div>error 404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
