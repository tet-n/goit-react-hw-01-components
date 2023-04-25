import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  padding-bottom: 20px;
  table-layout: fixed;
  width: 60%;
  border-collapse: collapse;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 4px;
`;

export const Thead = styled.thead`
  font-size: 16px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const TheadRow = styled.tr``;

export const TheadData = styled.th`
  padding: ${props => props.theme.spacing(2)};

  :first-child {
    text-align: left;
    padding-left: 13%;
  }

  :not(:first-child) {
    border-left: ${props => `1px solid ${props.theme.colors.white}`};
  }
`;

export const Tbody = styled.tbody`
  color: ${props => props.theme.colors.darkGrey};
`;
