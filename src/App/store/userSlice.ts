import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUser} from '../interfaces/user';
import {REST_RESSOURCES, REST_URL} from '../config/config';
import {IDocument} from '../interfaces/document';

const initialState: IUser = {firstName: '', name: '', photo: ''};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update(state, action: {type: string; payload: IUser}) {
      Object.assign(state, action.payload);
    },

    clear(state) {
      delete state.id;
      Object.assign(state, initialState);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      loadUser.fulfilled,
      (
        state,
        action: {type: string; payload: {user: IUser; docs: Array<IDocument>}},
      ) => {
        Object.assign(state, action.payload.user);
      },
    );
    builder.addCase(
      saveUser.fulfilled,
      (state, action: {type: string; payload: IUser}) => {
        Object.assign(state, action.payload);
      },
    );
  },
});

export const {clear, update} = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;

export const loadUser = createAsyncThunk(
  'user/fetchUser',
  async (id: number) => {
    const pruser = await fetch(`${REST_URL}${REST_RESSOURCES.users}/${id}`);
    const prdoc = await fetch(
      `${REST_URL}${REST_RESSOURCES.documents}?userId=${id}`,
    );
    return {user: await pruser.json(), docs: await prdoc.json()};
  },
);
export const saveUser = createAsyncThunk(
  'user/saveUser',
  async (user: IUser) => {
    const pr = await fetch(
      `${REST_URL}${REST_RESSOURCES.users}${
        undefined !== user.id ? '/' + user.id : ''
      }`,
      {
        method: undefined !== user.id ? 'PUT' : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      },
    );
    return await pr.json();
  },
);
