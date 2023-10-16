import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';

export const useDeletePageNavigator = (delete_url: string, isEncrypted: boolean, token: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { SetDeleteFileProps } = bindActionCreators(actionCreators, dispatch);
  const move = () => {
    SetDeleteFileProps({ delete_url: delete_url, isEncrypted: isEncrypted, token: token });
    navigate('/del');
  };
  return [move];
};
