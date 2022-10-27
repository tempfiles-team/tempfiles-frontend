import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const SetSusccesFileProps = (props: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SusccesFileProps,
    props: props,
  });
};

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
