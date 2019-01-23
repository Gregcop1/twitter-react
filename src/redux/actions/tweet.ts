import {Dispatch} from 'react';
import {AnyAction} from 'redux';
import tweetsHelper from '../../helpers/tweets';
import {User} from '../../interfaces';

export const ADD_TWEET = 'tweets/add';
export const ADD_TWEET_SUCCESS = 'tweets/add_success';
export const FETCH_TWEET = 'tweets/fetch';
export const FETCH_TWEET_SUCCESS = 'tweets/fetch_success';

export const addTweet = (author: User, message: string) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: ADD_TWEET });
  setTimeout(() => {
    dispatch({ type: ADD_TWEET_SUCCESS, author, message });
  }, 1000);
};

export const fetchTweets = () => (dispatch: Dispatch<AnyAction>, getState: () => any) => {
  const {tweets} = getState();
  dispatch({ type: FETCH_TWEET });
  setTimeout(() => {
    dispatch({
      type: FETCH_TWEET_SUCCESS,
      payload: (tweets.length ? tweets : tweetsHelper.generateTweets(30))
    });
  }, 1000);
};
