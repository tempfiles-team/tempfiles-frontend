import { ActionType } from '../action-types';
import { Action } from '../actions';

const reducer = (
  state: any = { token: null, delete_url: null, isEncrypted: null },
  action: Action
): any => {
  switch (action.type) {
    case ActionType.DeleteFileProps:
      return action.props;
    default:
      return state;
  }
};

export default reducer;
