import { combineReducers } from 'redux';
import deleteFileReducer from './DeleteFileProps';
import downloadFileReducer from './DownloadFileProps';

export const rootReducer = combineReducers({
  deleteFile: deleteFileReducer,
  downloadFile: downloadFileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
