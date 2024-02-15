import {configureStore} from '@reduxjs/toolkit';
import userReducer, {loadUser} from './userSlice';
import userDocumentsReducer from './userDocumentsSlice';

export const store = configureStore({
  reducer: {user: userReducer, docs: userDocumentsReducer},
});

store.subscribe(() => {
  console.log('====================================');
  console.log(store.getState());
  console.log('====================================');
});
store.dispatch(loadUser(0));
