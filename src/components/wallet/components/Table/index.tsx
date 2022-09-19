import * as React from 'react';
import { Table } from 'antd';
import { useTableHook } from 'components/data/hooks/useTableHook';

import './MarketTable.css';


const renderSize = (value: string) => <span>{value}</span>; 

const render = (value: string) => <span>{value}</span>;

export const MarketTable = () => {
  const { data, isLoading } = useTableHook();

  const columns = React.useMemo(
    () => [
      {
        title: 'Price',
        dataIndex: 'price',
        render,
      },
      {
        title: 'Size',
        dataIndex: 'quantity',
        render: renderSize,
      },
      {
        title: 'Total',
        dataIndex: 'quantity',
        render,
      },
    ],
    []
  );

  return (
    <div className="MarketTable">
      <div className="MarketTable__item MarketTable__item--bid ">
      <h3  className="MarketTable__header">Bid</h3>
      <Table
        loading={isLoading}
        dataSource={data.bid_orders}
        columns={columns}
      />
      </div>
      <div className="MarketTable__item MarketTable__item--ask ">
        <h3 className="MarketTable__header">Ask</h3>
        <Table
          loading={isLoading}
          dataSource={data.ask_orders}
          columns={columns}
      />
      </div>
    </div>
  );
};
