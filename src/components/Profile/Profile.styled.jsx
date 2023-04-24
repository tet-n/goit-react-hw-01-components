import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  margin: 0 auto;
  max-width: 240px;
  padding: 30px 0 0;
  background-color: ${props => props.theme.colors.white};

  text-align: center;
`;

export const Description = styled.div`
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const UserEmail = styled.p`
  margin-bottom: 7px;
  color: ${props => props.theme.colors.darkGray};
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.darkGray};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGray};
  border-top: ${props => `1px solid ${props.theme.colors.darkGray}`};
`;

export const StateItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  padding: ${props => props.theme.spacing(2)};
  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.darkGray}`};
  }
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.darkGray};
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
