import React, { useEffect, useReducer } from 'react';
import "./App.css";
import axios from "axios";
import { cardReducer } from './reducers/cardReducer';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {

  const [state, dispatch] = useReducer(cardReducer, {
    products: [],
    cart: [],
  });

  console.log(state);

const fetchProducts = async () => {

  const {data} = await axios.get("http://dummyjson.com/products");
  
 dispatch({
   type: "ADD_PRODUCTS",
   payload: data.products,
 });

}

useEffect(() => {
fetchProducts();
},[]);


  return (
    <div style={{display: "flex"}}>
<Products state={state} dispatch={dispatch} />
<Cart state={state} dispatch={dispatch} />
    </div>
  )
}

export default App