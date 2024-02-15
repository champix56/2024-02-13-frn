import {combineReducers, configureStore} from '@reduxjs/toolkit';
import currentReducer, {clearCurrent, fetchUser, updateCurrentUser} from './currentUser';
import userDocumentReducer from './userDocuments';

export const store = configureStore({
  reducer: combineReducers({
    user: currentReducer,
    documents: userDocumentReducer
  }),
  devTools: true,
});
store.subscribe(() => {
  console.log('store updated', store.getState());
});
store.dispatch(fetchUser(0));
// store.dispatch(
//   updateCurrentUser({
//     id: 1,
//     firstName: 'Alexandre',
//     name: 'DESORBAIX',
//     photo: null,
//   }),
// );
// store.dispatch(clearCurrent());
