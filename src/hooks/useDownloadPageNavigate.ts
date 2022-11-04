import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';

export const useDownloadPageNavigate = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { SetDownloadFileProps } = bindActionCreators(actionCreators, dispatch);
  const move = () => {
    SetDownloadFileProps(props);
    navigate('/download');
  };
  return [move];
};
