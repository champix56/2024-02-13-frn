import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {REST_RESSOURCES, REST_URL} from '../config/config';

const initialState = {
  name: '',
  firstName: '',
};

const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    updateCurrentUser(state, action) {
      delete state.photo;
      delete state.id;
      Object.assign(state, action.payload);
    },
    clearCurrent(state) {
      //{type:'currentUser/clearCurrent'}
      delete state.photo;
      delete state.id;
      Object.assign(state, initialState);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(action.type, action);
      delete state.photo;
      Object.assign(state, action.payload.user);
    });
    builder.addDefaultCase((s, a) => {
      console.log('default case ', a);
    });
  },
});

export const fetchUser = createAsyncThunk(
  'currentUser/fetchUser',
  async iduser => {
    const pruser = await fetch(`${REST_URL}${REST_RESSOURCES.users}/${iduser}`);
    const prdoc = await fetch(
      `${REST_URL}${REST_RESSOURCES.documents}?userId=${iduser}`,
    );

    const prsync = await Promise.all([pruser, prdoc]);
    return {
      user: await prsync[0].json(),
      docs: await prsync[1].json(),
    };
  },
);

//console.log(fetchUser(0));
export const {clearCurrent, updateCurrentUser} = currentUser.actions;
const currentReducer = currentUser.reducer;
export default currentReducer;
