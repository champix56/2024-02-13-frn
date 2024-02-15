import {createSlice} from '@reduxjs/toolkit';
import {IDocument} from '../interfaces/document';
import {IUser} from '../interfaces/user';
import {loadUser} from './userSlice';

const initialState: Array<IDocument> = [];

const userDocumentsSlice = createSlice({
  name: 'userDoc',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      loadUser.fulfilled,
      (
        state: Array<IDocument>,
        action: {type: string; payload: {user: IUser; docs: Array<IDocument>}},
      ) => {
        state.splice(0);
        state.push(...action.payload.docs);
      },
    );
  },
});

export const {} = userDocumentsSlice.actions;

const userDocumentsReducer = userDocumentsSlice.reducer;
export default userDocumentsReducer;
