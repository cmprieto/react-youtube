import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Video_detail from "../pages/Video_detail";
import Layout from "../components/Layout";
import VideoListFav from "../components/VideoListFav";
import VideoListChannel from "../components/VideoListChannel";
import ChannelsVisited from "../components/ChannelsVisited";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {/*    ENVOLVER TODAS LAS RUTAS CON Route Layout */}
        <Route index path="/react-youtube" element={<Home />} />
        <Route path="/react-youtube/videodetail" element={<Video_detail />} />
        <Route
          path="/react-youtube/videodetail/:id"
          element={<Video_detail />}
        />
        <Route path="/react-youtube/history/" element={<History />}/>
        <Route path="/react-youtube/favorites/" element={<VideoListFav />} />
        <Route path="/react-youtube/channel/" element={<ChannelsVisited />} />
        <Route
          path="/react-youtube/channel/:id"
          element={<VideoListChannel />}
        />
        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="/react-youtube/profile/" element={<ProtectedRoute component={<Profile />}/>} />
        <Route path="/react-youtube/*" element={<div>error 404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
