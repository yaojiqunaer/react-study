// user state management
import { request, setToken as _setToken, getToken } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
    name: 'user',
    // state
    initialState: {
        token: '',
        currentUser: {},
    },
    // action: sync update state
    reducers: {
        setToken: (state, action) => {
            state.token = getToken()
            _setToken(action.payload)
        },
        setUser: (state, action) => {
            state.currentUser = action.payload
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

const getUserApi = () => {
    return async (dispatch) => {
        await request.get('/users/1').then(res => {
            dispatch(setUser(res))
        })
    }
}

const { setToken, setUser } = userStore.actions

const userReducer = userStore.reducer

export {
    loginApi,
    getUserApi,
    setToken,
    setUser
}

export default userReducer