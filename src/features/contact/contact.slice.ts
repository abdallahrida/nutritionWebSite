import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Contact } from "./contact.type";

const initialState: Contact = {};

const makeContactApiCall = createAsyncThunk(
  "contact/makeContactApiCallStatus",
  async (body: any) => {}
);

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,

  reducers: {
    setContact: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    // TODO remove extraReducers if there are no thunks
    builder.addCase(makeContactApiCall.pending, (state, action) => {
      // Write pending logic here
    });
    builder.addCase(makeContactApiCall.fulfilled, (state, action) => {
      // Write success logic here
    });
    builder.addCase(makeContactApiCall.rejected, (state, action) => {
      // Write failure logic here
    });
  },
});

export const contactReducer = contactSlice.reducer;

export const contactActions = { ...contactSlice.actions, makeContactApiCall };
