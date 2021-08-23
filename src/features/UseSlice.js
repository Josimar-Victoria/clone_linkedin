import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

const UseSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       login: (state, actions) => {
           state.user = actions.payload
       },
       logout:(state ) => {
           state.user = null
       }
    }
});

export const {login, logout} = UseSlice.actions
export const selectUser = state => state.user.user
export default UseSlice.reducer