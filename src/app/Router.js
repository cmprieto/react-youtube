import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Video_detail from "../pages/Video_detail";
import Layout from "../components/Layout";
import TermLists from "../components/TermLists";

/* import Page2 from '../pages/Page2'; */

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {/*    ENVOLVER TODAS LAS RUTAS CON Route Layout */}
        <Route index path="/react-youtube" element={<Home />} />
       {/*  <Route path="/react-youtube/:id" element={<Home />} /> */}
       <Route path="/react-youtube/videodetail" element={<Video_detail />} />
        <Route path="/react-youtube/videodetail/:id" element={<Video_detail/>} />
        <Route path="/react-youtube/history/" element={<TermLists/>} />
        {/*  <Route path="/page2" element={<Page2/>} /> */}
        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="/react-youtube/*" element={<div>error 404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
