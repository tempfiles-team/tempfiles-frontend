import { ActionType } from '../action-types';
import { Action } from '../actions';

const reducer = (
  state: any = { filename: null, size: null, uploadDate: null },
  action: Action,
): any => {
  switch (action.type) {
    case ActionType.CheckPasswordFileProps:
      return action.props;
    default:
      return state;
  }
};

export default reducer;
