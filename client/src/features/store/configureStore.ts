import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "../../pages/account/accountSlice";
import { basketSlice } from "../../pages/basket/basketSlice";
import { catalogSlice } from "../../pages/products/productSlice";

export const store = configureStore({
reducer: {
        basket: basketSlice.reducer,
        account: accountSlice.reducer,
        catalog: catalogSlice.reducer
        
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;