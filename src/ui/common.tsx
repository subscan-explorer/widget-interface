import styled from "styled-components";
import { Colors } from "./theme/colors";

interface FontProps {
  bold?: boolean;
  fontColor?: keyof Colors;
  block?: boolean;
  nowrap?: boolean;
  wordbreak?: string;
}

export const StyledFont14 = styled.span<FontProps>`
  /* 14 */
  font-family: 'Eina 01';
  font-style: normal;
  font-weight: ${({ bold }) => bold ? 600 : 400};
  font-size: 14px;
  line-height: 20px;
  display: ${({ block }) => block ? 'block' : 'inline-block'};
  /* identical to box height, or 143% */

  /* Black */
  color: ${({ theme, fontColor }) => theme.colors[fontColor || 'primary']};
  white-space: ${({ nowrap }) => nowrap ? 'nowrap' : 'normal'};
  word-break: ${({ wordbreak }) => wordbreak || 'normal'};
`;

export const StyledFont12 = styled.span<FontProps>`
  /* 14 */
  font-family: 'Eina 01';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  display: ${({ block }) => block ? 'block' : 'inline-block'};
  /* identical to box height, or 143% */

  /* Black */
  color: ${({ theme, fontColor }) => theme.colors[fontColor || 'primary']};
  white-space: ${({ nowrap }) => nowrap ? 'nowrap' : 'normal'};
  word-break: ${({ wordbreak }) => wordbreak || 'normal'};
`;

export const StyledModuleBox = styled.div`
  background-color: ${({theme}) => theme.colors.contrast};;
  border: 1px solid ${({theme}) => theme.colors.background04};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledScrollX = styled.div`
  overflow-x: auto;
`;
