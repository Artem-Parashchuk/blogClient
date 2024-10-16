import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const registerUserThunk = createAsyncThunk(
  'auth/registerUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', {
        username,
        password,
      });

      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      // Проверяем, если сервер вернул специфическое сообщение об ошибке
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message); // передаем сообщение от сервера
      } else {
        return rejectWithValue('Щось пішло не так, спробуйте ще раз'); // стандартное сообщение при отсутствии ответа сервера
      }
    }
  }
);
