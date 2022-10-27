import { ActionType } from '../action-types';

interface SusccesFileProps {
  type: ActionType.SusccesFileProps;
  props: any;
}

interface DeleteFileProps {
  type: ActionType.DeleteFileName;
  name: string;
}

interface DownloadFileProps {
  type: ActionType.DownloadFileProps;
  props: any;
}

export type Action = SusccesFileProps | DeleteFileProps | DownloadFileProps;
