import { configureStore } from "@reduxjs/toolkit";
import EmployeSlice from "./EmployeSlice";


const Store = configureStore({
    reducer:{
        employe:EmployeSlice
    }
})

export default Store;