import Profile from 'components/Profile/Profile';
import user from '../../data/user.json';
import data from '../../data/data.json';
import { SectionWrapper } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <>
      <SectionWrapper>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </SectionWrapper>
      <Statistics title={'Upload stats'} stats={data}></Statistics>
    </>
  );
};
