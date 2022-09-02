import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  white-space:nowrap;
`;

export const StyledTr = styled.tr`
  &:hover td{
    background-color: #fbfbfb;
  }
`;

export const StyledTh = styled.th`
  padding: 15.5px 10px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.background04};
`;

export const StyledTd = styled.td`
  padding: 14.5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background04};
`;