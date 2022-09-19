import * as React from 'react';
import { notification } from 'antd';
import { WalletApi } from 'components/wallet/walletApi';
import { AppRoute } from 'routes';

window.Buffer = window.Buffer || require("buffer").Buffer;

notification.config({
  placement: 'topRight',
  bottom: 50,
  duration: 3,
  rtl: true,
});


WalletApi.initContract();

export const App: React.FC =  () => <AppRoute />;
