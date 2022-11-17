import { ActionType } from '../action-types';

interface DeleteFileProps {
  type: ActionType.DeleteFileProps;
  props: any;
}

interface DownloadFileProps {
  type: ActionType.DownloadFileProps;
  props: any;
}

export type Action = DeleteFileProps | DownloadFileProps;
