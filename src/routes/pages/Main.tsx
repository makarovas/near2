import { PageLayout } from 'routes/components/Page';
import { Wallet, MarketTable, MarketSelect } from 'components/wallet/components';

export const Main = () => (
  <PageLayout>
    <Wallet />
    <MarketSelect />
    <MarketTable />
  </PageLayout>
);
