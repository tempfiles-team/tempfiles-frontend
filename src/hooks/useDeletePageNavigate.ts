import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';

export const useDeletePageNavigator = (filename: string, token: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { SetDeleteFileProps } = bindActionCreators(actionCreators, dispatch);
  const move = () => {
    SetDeleteFileProps({ filename: filename, token: token });
    navigate('/delete');
  };
  return [move];
};
