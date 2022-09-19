import { notification } from 'antd';
import {
  connect,
  Contract,
  WalletConnection,
  Near,
  ConnectConfig,
} from 'near-api-js';
import { getConfig } from './config';

declare global {
  interface Window {
    nearConfig: any;
    near: Near;
    contract: any;
    walletConnection: WalletConnection;
  }
}


class IWalletApi {
  requestSignOut = async () => { 
    try {
      const request = await window.walletConnection.signOut();
      return request;
    } catch (err) {
      notification['error']({
        message: 'Error',
        description: 'err.message',
      });
      return false;
    }
  };

  requestSignIn = () => {
    window.walletConnection.requestSignIn(window.nearConfig.contractName);
  };

  checkSignIn = () => {
    return window.walletConnection.isSignedIn();
  };

  initContract = async () => {
    window.nearConfig = getConfig(process.env.NODE_ENV || 'development');

    window.near = await connect(window.nearConfig as ConnectConfig);

    window.walletConnection = new WalletConnection(window.near, 'near-app-test');

    window.contract = new Contract(
      window.walletConnection.account(),
      window.nearConfig.contractName,
      {
        viewMethods: ['beneficiary', 'get_donations', 'total_donations', 'markets', 'view_market', 'get_deposit'],
        changeMethods: ['donate'],
      }
    );
  };

  latestDonations = async () => {
    const total_donations = await window.contract.total_donations();

    const min = total_donations > 10 ? total_donations - 9 : 0;

    let donations = await window.contract.get_donations({
      from_index: min.toString(),
      limit: total_donations,
    });

    return donations;
  };

  getAccountData = async () => {
    const account = await window.near.account(this.getAddress())
    const balance = await account.getAccountBalance();
    const details = await account.getAccountDetails();
    return {
      balance,
      details,
    }
  };

  getMarkets = async () => {
    let markets = await window.contract.markets({});

    return markets;
  };

  getAddress = () => {
      return window.contract.account.accountId;
  }

  viewMarket = async (marketId: string) => {
    try {
      let market = await window.contract.view_market({ market_id: Number(marketId) });
      return market;
    } catch(err) {
      notification['error']({
        message: 'Error',
        description: 'error.message',
      });
    }
    return {};
  };
}

export const WalletApi = new IWalletApi();
