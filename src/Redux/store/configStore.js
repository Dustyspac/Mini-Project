import {configureStore} from "@reduxjs/toolkit";
import user from "../modules/user";

const store = configureStore({
    reducer: {
        user,
        devTools: process.env.NODE_ENV !== 'production'
    }
})

export default store;