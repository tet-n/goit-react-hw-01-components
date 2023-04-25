import styled from '@emotion/styled';
export const TBodyRow = styled.tr`
  :nth-child(2n) {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;

export const TData = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
  :first-child {
    text-align: left;
    padding-left: 13%;
  }

  :not(:first-child) {
    border-left: ${props => `1px solid ${props.theme.colors.lightGrey}`};
  }
`;
