
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";

import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria";
import Produtos from "./pages/Produtos";
import Localizacao from "./pages/Localizacao";
import Orcamento from "./pages/Orcamento";

function App() {
  return (
    <HashRouter>

      
      <div className="desktop-header">
        <Header />
      </div>

     
      <div className="mobile-header">
        <HeaderMobile />
      </div>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/nossa-historia"
          element={<NossaHistoria />}
        />

        <Route
          path="/products"
          element={<Produtos />}
        />

        <Route
          path="/localizacao"
          element={<Localizacao />}
        />

        <Route
          path="/orcamento"
          element={<Orcamento />}
        />

      </Routes>

      <Footer />

    </HashRouter>
  );
}

export default App;
