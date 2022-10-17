import { ActionType } from '../action-types';
import { Action } from '../actions';

const reducer = (
  state: any[] = [{ name: '', size: '', fileType: '', files: '' }],
  action: Action,
): any[] => {
  switch (action.type) {
    case ActionType.SusccesFileProps:
      return action.props;
    default:
      return state;
  }
};

export default reducer;
