import UserProfile from './profile/Profile';
import user from './profile/user';

import Statistics from './statistics/Statistics';
import data from './statistics/data';

import FriendList from './friendList/FriendsList'
import friends from './friendList/friends'

import TransactionHistory from './transactionHistory/TransactionHistory'
import transactions from './transactionHistory/transactions'


const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Statistics
        stats={data}
      />
      <FriendList 
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};

export default App;