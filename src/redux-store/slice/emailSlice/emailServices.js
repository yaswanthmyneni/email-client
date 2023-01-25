import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEmails = createAsyncThunk(
  "auth/getEmails",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://flipkart-email-mock.vercel.app/");
      const data = await res.json();
      if (res.status === 200) {
        return data.list;
      }
    } catch (error) {
      return rejectWithValue(`Error from getEmails: ${error.message}`);
    }
  }
);

export const getEmailDetails = createAsyncThunk(
  "auth/getEmailDetails",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
      const data = await res.json();
      if (res.status === 200) {
        return data;
      }
    } catch (error) {
      return rejectWithValue(`Error from getEmailDetails: ${error.message}`);
    }
  }
);
