import PropTypes from 'prop-types';
import {
  ProfileBox,
  Description,
  Avatar,
  UserName,
  UserEmail,
  Location,
  Stats,
  StateItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserEmail>{tag}</UserEmail>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StateItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StateItem>
        <StateItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StateItem>
        <StateItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StateItem>
      </Stats>
    </ProfileBox>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
