import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-basis: 25%;
  padding: ${props => props.theme.spacing(1)};
  text-align: center;
  background-color: ${props => props.bgColor};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.spacing(0.5)};
  font-size: 13px;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
`;
