import './App.css';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import im from "./im.png"

function HomePage() {
  return (
    <div id="home_div">
      <div id="home_div_words">
        <h1>Doar store</h1>
        <h6>we provide the best <br /> experince for our customers </h6> 
      </div>
      <img src={im} alt="" />
    </div>
  );
}
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductInfo/:id" element={<ProductInfo />} />
      </Routes>
    </>
  );
}

export default App;
