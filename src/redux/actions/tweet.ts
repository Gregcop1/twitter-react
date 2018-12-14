import {User} from '../../interfaces';

export const ADD_TWEET = 'tweets/add';

export const addTweet = (author: User, message: string) => ({ type: ADD_TWEET, author, message });
