import React from 'react';
import styled from 'styled-components';
import { Box, SystemStyleObject } from '@chakra-ui/react';

type ButtonProps = React.PropsWithChildren<{
  disabled?: boolean;
  clickable?: boolean;
  loading?: boolean;
  type?: 'stroke' | 'filled';
  size?: 'small' | 'middle';
  paddingSize?: 'small' | 'middle';
  inline?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: string;
  onClick?: () => void;
}> &
  SystemStyleObject;

const StyledButton = styled(Box)<ButtonProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  padding: 5px 15px;
`;

export const ColorButton = ({
  disabled,
  type,
  width,
  height,
  fontSize,
  loading,
  clickable,
  onClick,
  fontWeight,
  children,
  ...rest
}: ButtonProps) => {
  const bgStyle = disabled
    ? { background: '#F2F4FA' }
    : type === 'filled'
    ? {
        background: 'linear-gradient(315deg, #FE3876 0%, #7C30DD 71.44%, #3A30DD 100%)',
      }
    : {
        background:
          'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, #3A30DD, #FE3876) border-box',
        border: '1px solid transparent',
      };

  const textStyle = disabled
    ? { color: '#9D9D9D' }
    : type === 'filled'
    ? { color: '#F5F6FB' }
    : {
        background: 'linear-gradient(315deg, #FE3876 0%, #7C30DD 71.44%, #3A30DD 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      };

  return (
    <StyledButton
      style={{
        width: width ? width + 'px' : '',
        height: height ? height + 'px' : '',
        fontSize: fontSize ? fontSize + 'px' : '14px',
        fontWeight: fontSize ? fontWeight : '400',
        ...bgStyle,
      }}
      onClick={() => {
        if (!(disabled || loading) || clickable) {
          onClick && onClick();
        }
      }}
      {...rest}
    >
      <div style={textStyle}>{children}</div>
    </StyledButton>
  );
};
