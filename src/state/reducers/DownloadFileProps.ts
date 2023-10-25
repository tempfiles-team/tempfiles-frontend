import { ActionType } from '../action-types';
import { Action } from '../actions';

type DownloadFilePropsState = {
  token: string | null;
  isEncrypted: boolean | null;
};

const reducer = (
  state: DownloadFilePropsState = {
    token: null,
    isEncrypted: null,
  },
  action: Action
): DownloadFilePropsState => {
  switch (action.type) {
    case ActionType.DownloadFileProps:
      return action.props;
    default:
      return state;
  }
};

export default reducer;
