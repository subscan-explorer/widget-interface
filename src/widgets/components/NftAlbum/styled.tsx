import styled from 'styled-components';
import { StyledFont14 } from 'ui/common';

export const StyledNftBox = styled.table`
  white-space: nowrap;
  p,
  a,
  span {
    white-space: nowrap;
  }

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  margin: 5px 5px 10px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
`;

export const StyledNft = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.small};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.background04};
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px;
  }
`;

export const StyledLabel = styled(StyledFont14)`
  display: flex;
  margin-top: 5px;
`;
export const StyledValue = styled(StyledFont14)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 3px;
`;

export const StyledImg = styled.img`
  margin-bottom: 5px;
  border-radius: ${({ theme }) => theme.radii.small};
  overflow: hidden;
`;
