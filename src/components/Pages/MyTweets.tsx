import React, {useContext} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withFullPrimaryAsideBar} from '../Aside/FullPrimaryAsideBar';
import {withFullSecondaryAsideBar} from '../Aside/FullSecondaryAsideBar';
import {ListView} from '../List';
import {Tweet, User} from '../../interfaces';
import {UserContext} from '../Global/App';

interface MyTweetsViewProps {
  tweets: Tweet[],
}

const MyTweetsView = ({tweets}: MyTweetsViewProps) => {
  const user: User = useContext(UserContext);
  const filteredTweets = tweets.filter(tweet => user.account === tweet.author.account);

  return (
    <div className="column main-content">
      <ListView tweets={filteredTweets}/>
    </div>
  );
};

const withTweets = connect(
  ({tweets}: any) => ({
    tweets
  }),
);

const enhance: any = compose(
  withTweets,
  withFullSecondaryAsideBar,
  withFullPrimaryAsideBar
);

export const MyTweets = enhance(MyTweetsView);
