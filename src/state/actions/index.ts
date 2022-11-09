import { ActionType } from '../action-types';

interface DeleteFileProps {
  type: ActionType.DeleteFileName;
  name: string;
}

interface DownloadFileProps {
  type: ActionType.DownloadFileProps;
  props: any;
}

interface CheckPasswordFileProps {
  type: ActionType.CheckPasswordFileProps;
  props: any;
}
export type Action = DeleteFileProps | DownloadFileProps | CheckPasswordFileProps;
