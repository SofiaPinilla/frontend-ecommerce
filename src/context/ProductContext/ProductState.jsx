import { createContext, useReducer } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";

const cart = JSON.parse(localStorage.getItem("cart")) || []

const initialState = {
  products: [],
  cart:cart
};

const API_URL = "http://localhost:8080/products";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/getAll");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };

  const addCart =(product)=>{
    dispatch({
        type:"ADD_CART",
        payload:product
    })
  }

  const clearCart =()=>{
      dispatch({
        type:"CLEAR_CART"
      })
  }  

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart:state.cart,
        getProducts,
        addCart,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
