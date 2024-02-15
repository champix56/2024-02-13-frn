// interface IState {
//   users: Array<any>;
//   timestamp: string;
// }
const initialState = {
  users: [{id: -1}],
  timestamp: new Date().toISOString(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]};
    case 'ADD_USERS':
      return {...state, users: [...state.users, ...action.payload]};

    default:
      return state;
  }
};

const addUser = user => {
  return {type: 'ADD_USER', payload: user};
};

let state = reducer(undefined, {type: '@@INIT'});
console.log(state);
state = reducer(state,addUser({id: 0}));
console.log(state);
state = reducer(state, {type: 'ADD_USERS', payload: [{id: 1}, {id: 2}]});
console.log(state);
state = reducer(state, {type: 'JE_VEUX8DE8LA8CHOUCROUTE', payload: 100});
console.log(state);
