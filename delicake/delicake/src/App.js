import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Error/Error404';
import CartDetail from './components/Cart/CartDetail';
import CartContextProvider from './components/context/CartContext';
function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
              <Route path={"/"} element={<ItemListContainer/>} />
              <Route path={"/cart"} element={<CartDetail/>}/>
              <Route path={"/category/:id"} element={<ItemListContainer/>} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404/>} />
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
