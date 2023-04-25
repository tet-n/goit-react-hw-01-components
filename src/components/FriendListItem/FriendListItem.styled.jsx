import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${props => props.theme.spacing(3)};

  background-color: ${props => props.theme.colors.white};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props =>
    props.status ? props.theme.colors.online : props.theme.colors.offline};
  border-radius: 50%;
`;

export const Avatar = styled.img``;

export const Username = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
