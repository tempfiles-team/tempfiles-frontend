import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';

export const useDeletePageNavigator = (fileName: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { SetDeleteFileName } = bindActionCreators(actionCreators, dispatch);
  const move = () => {
    SetDeleteFileName(fileName);
    navigate('/delete');
  };
  return [move];
};
