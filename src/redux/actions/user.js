import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
import { LOGIN } from "../constants";

export const login = createAsyncThunk('user/login', async (payload) => {
  return await UserService.login(payload)
})

export const getAllBusiness = createAsyncThunk('user/getAllBusiness', async () => {
  return await UserService.getAllBusiness()
})

//export const login = createAction('user/login')