import styled from "styled-components";

export const StyledFont14 = styled.span<{color?: string}>`
  /* 14 */
  font-family: 'Eina 01';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Black */
  color: ${({ theme, color }) => theme.colors[color || 'primary']};
`;


export const StyledFont12 = styled.span<{nowrap?: boolean}>`
  /* 14 */
  font-family: 'Eina 01';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height, or 143% */

  /* Black */
  color: ${({ theme }) => theme.colors.primary};
  white-space: ${({ nowrap }) => nowrap ? 'nowrap' : 'normal'};
`;

export const StyledFont14Bold = styled.span`
  /* 14 */
  font-family: 'Eina 01';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Black */
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledModuleBox = styled.div`
  border: 1px solid ${({theme}) => theme.colors.background04};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 10px 20px;
  
`;

export const StyledScrollX = styled.div`
  overflow-x: auto;
`;