import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
