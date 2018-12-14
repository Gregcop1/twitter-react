import tweetsHelper from '../../helpers/tweets';
import {ADD_TWEET} from '../actions';
import {Tweet} from '../../interfaces';

interface Store {
  tweets: Tweet[],
}

const initialState: Store = {
  tweets: tweetsHelper.generateTweets(30)
};

export const rootReducer = (state: Store = initialState, action: any) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: [
          {
            author: action.author,
            date: new Date().getTime(),
            message: action.message,
            shares: {
              answer: 0,
              like: 0,
              retweet: 0,
            }
          },
          ...state.tweets
        ]
      };
    default:
      return state;
  }
};
