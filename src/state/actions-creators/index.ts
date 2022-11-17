import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const SetDeleteFileProps = (props: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DeleteFileProps,
    props: props,
  });
};

export const SetDownloadFileProps = (props: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DownloadFileProps,
    props: props,
  });
};
