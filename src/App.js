import './App.css';
import Navigation from './Box/Navigation/Navigation';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product'
import Footer from './Box/Footer/Footer';
import men_banner from './Box/Assets/Banner_men.png'
import women_banner from './Box/Assets/Banner_women.png'
import kid_bannner from './Box/Assets/banner_kid.png'
import Loginsignup from './Pages/Loginsignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid_bannner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productid'element={<Product/>}/>
        </Route> 
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login'element={<Loginsignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
