import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import VideoPage from "../pages/videoPage"
import CheckOut from "../pages/checkout";


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contatos" element={<VideoPage/>} />
            <Route path="/checkout" element={<CheckOut/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
