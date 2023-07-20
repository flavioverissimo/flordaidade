import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Campanhas from "./pages/Campanhas";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NovaCampanha from "./pages/Admin/add";
import TodasCampanhas from "./pages/Admin/campanhas";
import EditarCampanha from "./pages/Admin/editarCampanha";

function App() {
  return (
    <div>
      <div className=" fixed w-full h-full -z-20">
        <div className="absolute w-full h-full bg-intensiveColor/80"></div>
        <img src="/background.jpg" alt="" className="absolute w-full -z-10" />
      </div>
      {
        <BrowserRouter>
          <Header />
          <div className=" container mx-auto max-w-7xl z-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/campanhas" element={<Campanhas />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/admin" element={<Admin />}>
                <Route path="criarcampanha" element={<NovaCampanha />} />
                <Route path="todascampanhas" element={<TodasCampanhas />} />
                <Route path="editarcampanha/:id" element={<EditarCampanha />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
