import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";

export const login = createAsyncThunk('user/login', async (payload) => {
  return await UserService.login(payload)
})

export const getAllBusiness = createAsyncThunk('user/getAllBusiness', async () => {
  return await UserService.getAllBusiness()
})

export const register = createAsyncThunk('user/register', async (payload) => {
  return await UserService.register(payload)
})

export const setBusiness = createAction('user/setBusiness')

//export const login = createAction('user/login')