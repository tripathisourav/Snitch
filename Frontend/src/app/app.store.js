import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth.slice";    
import cartReducer from "../features/cart/state/cart.slice";
import productReducer from "../features/products/state/product.slice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer
  }
});