
import './App.css';
import landing_01 from './assets/jpg1.jpg';
import landing_02 from './assets/jpg2.jpg';
import landing_03 from './assets/jpg3.jpg';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Slider from './components/Slider.js';
import Formulario from './components/Formulario';


function App() {

  const navbarLinks = [
    { url: "#", title: "Inicio" },
    { url: "#", title: "Servicios" },
    { url: "#", title: "Nosotros" },
  ];
  return (
    <div className="App"> 
      
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={landing_01} />

      <Slider 
      imageSrc={landing_02} 
      title={"Conectamos a las personas con su negocio. Sitios web y aplicaciones."} 
      subtitule={"Servicio1"}
      
      

      />

      <Slider 
      imageSrc={landing_03} 
      title={"Atraemos los clientes, posicionamiento de marca"}
      subtitule={"Servicio2"} 
      flipped={true}  

      /> 
      {/* // flipped={true} para que se muestre en el otro lado del slider (en este caso el slider 2) */}
      <Formulario />
    
    </div> 
  
  );
}

export default App;
