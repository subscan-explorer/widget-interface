import BigNumber from 'bignumber.js';
import { BIG_TEN } from './bigNumber';

export const getBalanceAmount = (amount: BigNumber | string, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
};