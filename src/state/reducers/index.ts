import { combineReducers } from 'redux';

import SuccessFileProps from './SuccessFileProps';

const reducers = combineReducers({
  SuccessFileProps: SuccessFileProps,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
