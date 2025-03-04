import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Redux/slice/MenuSlice"
import basketReducer from "../Redux/slice/BasketSlice"

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        basket: basketReducer
    }
}
)