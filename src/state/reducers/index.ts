import { combineReducers } from 'redux';

import DeleteFileName from './DeleteFileName';
import SuccessFileProps from './SuccessFileProps';

const reducers = combineReducers({
  SuccessFileProps: SuccessFileProps,
  DeleteFileName: DeleteFileName,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
