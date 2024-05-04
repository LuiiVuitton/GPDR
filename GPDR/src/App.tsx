import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./pages/components/NavBar";

import logo from "./assets/AlfaroAutoDetail.png";

import Home from "./pages/components/Home";

import image from "./assets/Car-Bg.jpg";

import Services from "./pages/Services";

function App() {
  return (
    <div>
      <NavBar logoPath={logo} />
      <Home imageSrcPath={image} />
      <Services />
    </div>
  );
}

export default App;
