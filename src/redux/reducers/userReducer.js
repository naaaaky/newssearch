import { USER_FETCH } from '../actions/userAction';

const initState = '';

const userReducer = (state = initState, action) => {
  if (action.type === USER_FETCH) {
    return action.payload;
  }

  return state;
};

export default userReducer;
