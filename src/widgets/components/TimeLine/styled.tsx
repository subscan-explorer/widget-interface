import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  white-space:nowrap;
  p, a, span {
    white-space: nowrap;
  }
`;

export const StyledTr = styled.tr`
  &:hover td{
    background-color: ${({ theme }) => `${theme.colors.background04}46`};
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

export const StyledSortBox = styled.span`
  display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 34px;
    width: 24px;
    vertical-align: middle;
    cursor: pointer;
    overflow: initial;
    position: relative;
`;

export const StyledSortAsc = styled.i`
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
  left: 7px;

  border-bottom-color: #c0c4cc;
  top: 5px;
  &.active {
    border-bottom-color: ${({ theme }) => theme.colors.link};
  }
`;

export const StyledSortDesc = styled.i`
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
  left: 7px;

  border-top-color: #c0c4cc;
  bottom: 7px;
  &.active {
    border-top-color: ${({ theme }) => theme.colors.link};
  }
`;
