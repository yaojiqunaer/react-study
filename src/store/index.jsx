import userReducer from './modules/user'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        user: userReducer
    }
});