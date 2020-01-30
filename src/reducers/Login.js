import { LOGIN_REQUEST, EDIT_REQUEST } from '../actions/action-types'

const LoginDefaultState = {};

export default (state = LoginDefaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.payload;
    case 'ADD_REQUEST':
      return { ...state,
        ...action.payload};
    case EDIT_REQUEST:
        return state.map((item) => {
            if (item.id === action.id) {
                return {
                    ...item,
                    ...action.updates
                };
            } else {
                return item;
            }
        });
    case 'REMOVE_REQUEST':
        return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};