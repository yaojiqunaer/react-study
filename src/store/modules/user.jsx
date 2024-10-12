// user state management
import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
    name: 'user',
    // state
    initialState: {
        token: '',
    },
    // action: sync update state
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
})


const { setToken } = userStore.actions

const userReducer = userStore.reducer

export { setToken }

export default userReducer