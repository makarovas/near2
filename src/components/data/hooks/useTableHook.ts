import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marketMarketDataSelector, marketSelectedMarketSelector } from '../selector';
import { getMarketData } from '../reducer';

export const useTableHook = () => {
  const dispatch = useDispatch();
  const market = useSelector(marketSelectedMarketSelector);
  const { data, isLoading } = useSelector(marketMarketDataSelector);

  React.useEffect(() => {
    if (market) {
      dispatch<any>(getMarketData(`${market.id}`));
    }
  }, [market, dispatch]);

  return {
    data,
    isLoading,
  };
};
