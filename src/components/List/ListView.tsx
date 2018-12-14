import React from 'react';
import {ListItem} from './ListItem';
import {Tweet} from '../../interfaces';

interface ListViewProps {
  tweets: Tweet[];
}

export const ListView = ({ tweets }: ListViewProps) => (
    <div className="tweet-list">
        {tweets && tweets.map((tweet, index) => (
            <ListItem key={index} tweet={tweet} />
        ))}
    </div>
);
