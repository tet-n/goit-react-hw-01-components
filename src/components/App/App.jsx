import Profile from 'components/Profile/Profile';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friendsData from '../../data/friends.json';
import transactionData from '../../data/transactions.json';
import { SectionWrapper } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
      <Statistics title="Upload stats" stats={data}></Statistics>
      <Statistics stats={data}></Statistics>
      <SectionWrapper>
        <FriendList friends={friendsData} />
      </SectionWrapper>
      <SectionWrapper>
        <TransactionHistory items={transactionData} />
      </SectionWrapper>
    </>
  );
};
