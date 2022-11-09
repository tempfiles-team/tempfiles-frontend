import { combineReducers } from 'redux';

import CheckPasswordFileProps from './CheckPasswordFileProps';
import DeleteFileName from './DeleteFileName';
import DownloadFileProps from './DownloadFileProps';

const reducers = combineReducers({
  DeleteFileName: DeleteFileName,
  DownloadFileProps: DownloadFileProps,
  CheckPasswordFileProps: CheckPasswordFileProps,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
