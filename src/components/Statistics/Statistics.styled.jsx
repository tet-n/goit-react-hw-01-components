import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(4, 0, 0)};

  max-width: 500px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 3px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacing(4)};
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
`;
