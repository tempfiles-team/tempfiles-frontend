import { ActionType } from '../action-types';

interface SusccesFileProps {
  type: ActionType.SusccesFileProps;
  props: any;
}

interface DeleteFileProps {
  type: ActionType.DeleteFileName;
  name: string;
}

export type Action = SusccesFileProps | DeleteFileProps;
