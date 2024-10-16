import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "../../utils/axios";


export const loginThunk = createAsyncThunk('login/loginThunk', async ({username, password}) => {
    try{
        const {data} = await axios.post('/auth/login', {
            username,
            password
        })

        if(data.token) {
            window.localStorage.setItem('token', data.token)
        }

        return data
    }catch(error) {
        console.log(error)
    }
})