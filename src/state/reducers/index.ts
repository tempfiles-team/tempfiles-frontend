import { combineReducers } from 'redux';

import DeleteFileName from './DeleteFileProps';
import DownloadFileProps from './DownloadFileProps';

const reducers = combineReducers({
  DeleteFileName: DeleteFileName,
  DownloadFileProps: DownloadFileProps,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
