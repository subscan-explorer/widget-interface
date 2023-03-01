import styled, { css, keyframes } from 'styled-components';
import { space } from 'styled-system';
import { Colors } from 'ui/theme/colors';
import { SvgProps } from './types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const Svg = styled.svg<SvgProps>`
  align-self: center;
  fill: ${({ theme, color }) => theme.colors[(color as keyof Colors) || 'none'] || color};
  flex-shrink: 0;
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'normal')};
  ${({ spin }) => spin && spinStyle}
  ${space}
`;

Svg.defaultProps = {
  color: 'primary',
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg',
  spin: false,
  pointer: false,
};

export default Svg;
