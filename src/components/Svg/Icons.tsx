import * as IconsList from './index';

export const Icons = {
  barchart: IconsList.BarChartIcon,
  finalized: IconsList.FinalizedIcon,
  note: IconsList.NoteIcon,
  person: IconsList.PersonIcon,
  points: IconsList.PointsIcon,
  rate: IconsList.RateIcon,
  stake: IconsList.StakeIcon,
  swap: IconsList.SwapIcon,
};

export type IconName = keyof typeof Icons;
