import {ADD_TWEET, ADD_TWEET_SUCCESS, FETCH_TWEET, FETCH_TWEET_SUCCESS} from '../actions';
import {Tweet} from '../../interfaces';

interface Store {
  pending: boolean,
  tweets: Tweet[],
}

const initialState: Store = {
  pending: false,
  tweets: [],
};

export const rootReducer = (state: Store = initialState, action: any) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        pending: true,
      };
    case ADD_TWEET_SUCCESS:
      return {
        ...state,
        pending: false,
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
    case FETCH_TWEET:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TWEET_SUCCESS:
      return {
        ...state,
        pending: false,
        tweets: action.payload,
      };
    default:
      return state;
  }
};
