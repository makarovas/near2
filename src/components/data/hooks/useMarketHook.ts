import { useEffect } from 'react';
import { getMarkets } from '../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { marketsSelector } from '../selector';

export const useMarketHook = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector(marketsSelector)

  useEffect(() => {
    dispatch<any>(getMarkets());
  }, [dispatch]);

  return {
    data,
    isLoading,
  };
};
