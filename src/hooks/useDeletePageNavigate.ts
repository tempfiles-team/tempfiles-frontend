import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';

export const useDeletePageNavigator = (filename: string, delete_url: string, token: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { SetDeleteFileProps } = bindActionCreators(actionCreators, dispatch);
  const move = () => {
    SetDeleteFileProps({ filename: filename, delete_url: delete_url, token: token });
    navigate('/delete');
  };
  return [move];
};
