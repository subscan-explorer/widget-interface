export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const radii = {
  small: "4px",
  default: "16px",
  card: "24px",
  circle: "50%",
};

export type ChainColors = {
  color: string;
  borderRadius: string;
}

export const chain: {
  dark: ChainColors;
  light: ChainColors;
} = {
  dark: {
    color: '#FF0083',
    borderRadius: '4px',
  },
  light: {
    color: '#FF0083',
    borderRadius: '4px',
  }
};

