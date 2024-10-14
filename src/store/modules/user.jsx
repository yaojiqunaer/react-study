// user state management
import { request, setToken as _setToken, getToken } from '@/utils'
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
            state.token = getToken()
            _setToken(action.payload)
        },
    },
})

const loginApi = (loginData) => {
    return async (dispatch) => {
        // call api
        await request.post('/posts', loginData).then(res => {
            dispatch(setToken(res.phone))
        })
    }
}

const { setToken } = userStore.actions

const userReducer = userStore.reducer

export { loginApi, setToken }

export default userReducer