import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import "./App.css"
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Success from './Pages/Success';
import { useSelector } from 'react-redux';


function App() {

  const user = useSelector((state) => state.user.currentUser)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/productlist" element={<ProductList />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
