import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from './productSlice';

const Store = configureStore({
    reducer : {
       cart: cartSlice,
       products: productSlice
    }
});

export default Store;