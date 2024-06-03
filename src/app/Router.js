import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import VideoDetail from "../components/VideoDetail";
/* import Page2 from '../pages/Page2'; */

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {" "}
        {/*    ENVOLVER TODAS LAS RUTAS CON Route Layout */}
        <Route index path="/react-youtube" element={<Home />} />
        <Route path="/react-youtube/:id" element={<Home />} />
        {/*  <Route path="/page2" element={<Page2/>} /> */}
        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="/react-youtube/*" element={<div>error 404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
