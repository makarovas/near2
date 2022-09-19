import { Select } from 'antd';
import { setSelectedMarket } from 'components/data';
import { useMarketHook } from 'components/data/hooks/useMarketHook';
import { MarketItem } from 'intefaces';
import { useDispatch } from 'react-redux';
import './MarketSelect.css';

const { Option } = Select;

export const MarketSelect = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useMarketHook();

  const handleChangeMarket = (itemId: string) => {
    const item = data.find((el: MarketItem) => el.id === itemId);
    dispatch(setSelectedMarket(item));
  }

  return (
    <div className="MarketSelect">
      <Select loading={isLoading} onChange={handleChangeMarket} className="MarketSelect__select">
        {data.map((item) => {
          return (
            <Option key={item.base.ticker} value={item.id} label={item.base.ticker}>
              {item.base.ticker}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
