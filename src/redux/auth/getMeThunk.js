import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getMeThunk = createAsyncThunk("getMe/getMeThunk", async () => {
  try {
    const { data } = await axios.get("/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
});
