import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { ProductProvider } from "./context/ProductContext/ProductState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <ProductProvider>
            {/* los componentes */}
            <Header />
            <Routes>
              <Route path="/" element={<Products/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ProductProvider>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
