import {useState} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import createStyles from './styles';
import { useThemedStyles } from '../../hooks/useThemedStyles';

const useNotification = () => {
  const {getState, dispatch} = useReduxStore();

    const [isLoading, setIsLoading] = useState(true);


  const styles = useThemedStyles(createStyles);
  let listViewData = Array(20)
    .fill('')
    .map((_, i) => ({key: `${i}`, text: `item #${i}`}));

  


  return {
    styles,
    listViewData,
    isLoading, setIsLoading

  };
};

export default useNotification;
