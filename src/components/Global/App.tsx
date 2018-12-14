import React, {createContext} from 'react';
import {Route} from 'react-router-dom';
import {Header} from '../Header';
import {Home} from '../Pages';
import '../../stylesheets/components/main-layout.scss';

const initialUser = {
  name: 'Grégory Copin',
  email: 'gregcop1@gmail.com',
  account: '@gregcop1',
  tweetCount: 500 + Math.ceil(Math.random() * 200),
  subscriber: Math.ceil(Math.random() * 200),
  subscription: Math.ceil(Math.random() * 200)
};
export const UserContext = createContext(initialUser);

export const App = () => (
  <UserContext.Provider value={initialUser}>
    <Header/>
    <div className="main-container">
      <div className="container">
        <Route exact path="/" component={Home}/>
      </div>
    </div>
  </UserContext.Provider>
);
