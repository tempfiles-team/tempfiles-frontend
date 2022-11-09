import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const SetDeleteFileName = (name: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DeleteFileName,
    name: name,
  });
};

export const SetDownloadFileProps = (props: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DownloadFileProps,
    props: props,
  });
};

export const SetCheckPasswordFileProps = (props: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.CheckPasswordFileProps,
    props: props,
  });
};
