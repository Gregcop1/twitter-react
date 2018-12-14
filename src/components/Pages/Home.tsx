import React, {useState} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {FullWriter, SimpleWriter} from '../Writer';
import {withFullPrimaryAsideBar} from '../Aside/FullPrimaryAsideBar';
import {withFullSecondaryAsideBar} from '../Aside/FullSecondaryAsideBar';
import {ListView} from '../List';
import {Tweet} from '../../interfaces';

interface HomeViewProps {
  tweets: Tweet[],
}

const HomeView = ({tweets}: HomeViewProps) => {
  const [writerFold, setWriterFold] = useState(true);
  const toggleWriterDisplay = () => setWriterFold(!writerFold);

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
);

const enhance: any = compose(
  withTweets,
  withFullSecondaryAsideBar,
  withFullPrimaryAsideBar
);

export const Home = enhance(HomeView);
