import { ActionType } from '../action-types';
import { Action } from '../actions';

const reducer = (state: string = '', action: Action): string => {
  switch (action.type) {
    case ActionType.DeleteFileName:
      return action.name;
    default:
      return state;
  }
};

export default reducer;
