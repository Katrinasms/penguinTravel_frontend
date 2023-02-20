import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toPaid: 0,
    creditGet: 0,
    creditType: "free",
    credit_id: ""
};

const url = "http://localhost:5001"

const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    buyCreditNType: (state, action) => {
    console.log("buyCreditType", action.payload);
      state.toPaid = action.payload.toPaid;
      state.creditGet = action.payload.creditGet;
      state.creditType = action.payload.creditType;
    },
    createCreditOrder: {
      reducer: (state, action) => {
        console.log(action.payload)
        // state.credit_id = action.payload.credit_id
      },
      prepare: async (user_id, toPaid) => {
        const { data } = await axios.post(`${url}/createCredit`, {userId:user_id ,
          credit_add: toPaid});
          console.log("data in creatrecredit order",data)
          return {payload: {credit_id: data._id}}
      }
    }
    

  }
}
);

export const { buyCreditNType,createCreditOrder } = creditSlice.actions;

export default creditSlice.reducer;
