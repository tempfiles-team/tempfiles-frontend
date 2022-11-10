import { ActionType } from '../action-types';
import { Action } from '../actions';

const reducer = (
  state: any = { filename: null, size: null, lastModified: null, token: null, donwload_url: null },
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
