import PropTypes from 'prop-types';
import { Status, Avatar, Username, FriendItem } from './FriendListItem.styled';

export function FriendListItem({ avatar, isOnline, name }) {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Username>{name}</Username>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
