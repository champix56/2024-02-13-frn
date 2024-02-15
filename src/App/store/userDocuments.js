import {createSlice} from '@reduxjs/toolkit';
import { fetchUser } from './currentUser';

const initialState = [{type: 'PDF', id: 0, title: 'coucou', userId: 0}];

const userDocuments = createSlice({
  name: 'userDocument',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchUser.fulfilled,(s,a)=>{
      s.splice(0);
      s.push(...a.payload.docs)
    })
  }
});

// export const {} = userDocuments.actions

const userDocumentReducer = userDocuments.reducer;

export default userDocumentReducer;
