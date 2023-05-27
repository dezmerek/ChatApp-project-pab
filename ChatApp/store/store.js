import { configureStore } from "@reduxjs/toolkit";
import authSilence from "./authSilence";

export const store = configureStore({
    reducer: {
        auth: authSilence
    }
})