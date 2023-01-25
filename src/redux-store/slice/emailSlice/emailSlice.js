import { createSlice } from "@reduxjs/toolkit";
import { getEmailDetails, getEmails } from "./emailServices";

const initialState = {
  status: "idle",
  emailList: [],
  singleEmailDetails: "",
  selectedEmail: null,
  favMailIds: [],
  filter: null,
  // email: null,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    // setEmail: (state, action) => {
    //   state.email = action.payload;
    // },
    // setReadedMail: (state, action) => {
    //   if (Array.isArray(action.payload)) {
    //     state.readedMails = [...action.payload];
    //   } else {
    //     state.readedMails = [...state.readedMails, action.payload];
    //   }
    // },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setFavMailIds: (state, action) => {
      state.favMailIds = [...state.favMailIds, action.payload];
    },
  },
  extraReducers: {
    [getEmails.pending]: (state) => {
      state.status = "pending";
    },
    [getEmails.fulfilled]: (state, { payload }) => {
      state.emailList = payload;
    },
    [getEmails.rejected]: (_, action) => {
      console.error(action.payload);
    },
    [getEmailDetails.pending]: (state) => {
      state.status = "pending";
    },
    [getEmailDetails.fulfilled]: (state, { payload }) => {
      state.singleEmailDetails = payload;
    },
    [getEmailDetails.rejected]: (_, action) => {
      console.error(action.payload);
    },
  },
});

export const {
  // setEmail,
  // setReadedMail,
  setFilter,
  setSelectedEmail,
  setFavMailIds,
} = emailSlice.actions;

export default emailSlice.reducer;
