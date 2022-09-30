import * as IconsList from './index';

export const Icons = {
  barchart: IconsList.BarChartIcon,
  finalized: IconsList.FinalizedIcon,
};

export type IconName = keyof typeof Icons;
