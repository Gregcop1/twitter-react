import React, {useEffect, useState} from 'react';
import {Action, compose, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {FullWriter, SimpleWriter} from '../Writer';
import {withFullPrimaryAsideBar} from '../Aside/FullPrimaryAsideBar';
import {withFullSecondaryAsideBar} from '../Aside/FullSecondaryAsideBar';
import {ListView} from '../List';
import {Tweet} from '../../interfaces';
import {fetchTweets} from '../../redux/actions';

interface HomeViewProps {
  fetch: () => void,
  tweets: Tweet[],
}

const HomeView = ({fetch, tweets}: HomeViewProps) => {
  const [writerFold, setWriterFold] = useState(true);
  const toggleWriterDisplay = () => setWriterFold(!writerFold);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="column main-content">
      <div className="block writer-block">
        {writerFold ?
          <SimpleWriter focus={toggleWriterDisplay}/> :
          <FullWriter leave={toggleWriterDisplay}/>
        }
      </div>
      <ListView tweets={tweets}/>
    </div>
  );
};

const withTweets = connect(
  ({tweets}: any) => ({
    tweets
  }),
  (dispatch: any) => ({
    fetch: () => dispatch(fetchTweets())
  }),
);

const enhance: any = compose(
  withTweets,
  withFullSecondaryAsideBar,
  withFullPrimaryAsideBar
);

export const Home = enhance(HomeView);
