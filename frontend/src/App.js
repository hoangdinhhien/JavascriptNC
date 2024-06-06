
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import fruit_banner from './Components/Assets/banner_fruit.png'
import vegetable_banner from './Components/Assets/banner_vegetable.png'
import juice_banner from './Components/Assets/banner_juice.png'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
        <Route path='/' element={<Shop />}/>
        <Route path='/fruits' element={<ShopCategory banner={fruit_banner} category="Fruit"/>}/>
        <Route path='/vegetables' element={<ShopCategory banner={vegetable_banner} category="Vegetable"/>}/>
        <Route path='/juices' element={<ShopCategory banner={juice_banner} category="Juice"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product />} />  </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
