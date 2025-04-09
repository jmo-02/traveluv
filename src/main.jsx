import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Information from "./pages/information/Information.jsx";
import "./index.css";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import HowWork from "./pages/how-work/HowWork.jsx";
import Community from "./pages/Information/Community/community.jsx";
import Security from "./pages/Information/Security/Security.jsx";
import Logistic from "./pages/Information/Logistic/Logistic.jsx";
import Support from "./pages/Information/Support/Support.jsx";

// import App from "./App";

createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="iniciar-sesion" element={<Login />} />
        <Route path="como-funciona" element={<HowWork/>}/>
        <Route path="acerca-de-nosotros" element={<AboutUs />} />
        <Route path="viaja" element={<Information />}>
          <Route path="comunidad" element={<Community />} />
          <Route path="seguridad" element={<Security />} />
          <Route path="logistica" element={<Logistic />} />
          <Route path="soporte" element={<Support />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
