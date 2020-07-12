import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
  isLoading: true,
  errMess: null,
  dishes: []
}, action) => {
  switch (action.type) {

    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload // action.payload = DISHES
      };

    case ActionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        dishes: []
      };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
        dishes: []
      };

    default:
      return state;
  }
}