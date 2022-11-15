import { ActionType } from '../action-types';
import { Action } from '../actions';

const reducer = (
  state: any = {
    fileId: null,
    token: null,
    isEncrypted: null,
  },
  action: Action,
): any => {
  switch (action.type) {
    case ActionType.DownloadFileProps:
      return action.props;
    default:
      return state;
  }
};

export default reducer;
