import * as React from 'react'
import { Card } from 'antd';
import { utils } from 'near-api-js';
import { Spinner } from 'routes/components/Loader';
import { useWalletHook } from 'components/wallet/hooks';

export const Wallet = () => {
  const { data, isLoading } = useWalletHook();

  const formatter = (value: string) => utils.format.formatNearAmount(value);

  return (
    <div>
      <Card title={<h2>Wallet</h2>} style={{width: '100%', marginBottom: 20 }}>
        {isLoading && <Spinner />}
        {data && (
          <>
            <h3>
              Address: <b>{data.address}</b>
            </h3>
            {data.balance && (
              <>
                <h4>Balance: </h4>
                    <p>
                      Total: <b>{formatter(data.balance.total)}</b>
                    </p>
                    <p>
                      Staked: <b>{formatter(data.balance.staked)}</b>
                    </p>
                    <p>
                      Available: <b>{formatter(data.balance.available)}</b>
                    </p>
                    <p>
                      State staked: <b>{formatter(data.balance.stateStaked)}</b>
                    </p>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  );
};
