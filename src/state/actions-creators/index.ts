import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const SetSusccesFileProps = (props: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SusccesFileProps,
    props: props,
  });
};
