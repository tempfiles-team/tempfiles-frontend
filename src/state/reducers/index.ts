import { combineReducers } from 'redux';

import DeleteFileName from './DeleteFileName';
import DownloadFileProps from './DownloadFileProps';
import SuccessFileProps from './SuccessFileProps';

const reducers = combineReducers({
  SuccessFileProps: SuccessFileProps,
  DeleteFileName: DeleteFileName,
  DownloadFileProps: DownloadFileProps,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
