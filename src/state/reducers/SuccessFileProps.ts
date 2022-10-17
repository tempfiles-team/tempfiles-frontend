import { ActionType } from '../action-types';
import { Action } from '../actions';
const reducer = (
  state: any = { name: null, size: null, fileType: null, files: null },
  action: Action,
): any => {
  switch (action.type) {
    case ActionType.SusccesFileProps:
      return action.props;
    default:
      return state;
  }
};

export default reducer;
