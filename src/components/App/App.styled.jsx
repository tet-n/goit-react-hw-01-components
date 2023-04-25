import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  padding: ${props => props.theme.spacing(10, 0)};

  :last-child {
    padding-top: 0;
  }
`;
