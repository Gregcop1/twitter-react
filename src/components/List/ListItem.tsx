import React from 'react';
import gravatarHelper from '../../helpers/gravatar';
import dateHelper from '../../helpers/date';
import {ActionBar}  from './ActionBar'
import {Tweet} from '../../interfaces';
import '../../stylesheets/components/list-item.scss';

interface ListItemProps {
  tweet: Tweet;
}

export const ListItem = ({ tweet }: ListItemProps) => (
    <div className="block list-item">
        <img src={ gravatarHelper.getAvatar(tweet.author.email) } alt={tweet.author.name} className="avatar" />
        <div className="list-item-content">
            <p className="list-item-meta">
                <span className="list-item-name">{ tweet.author.name }</span>
                <span className="list-item-account">{ tweet.author.account }</span>
                <span className="list-item-date">{ dateHelper.fromNow(tweet.date) }</span>
            </p>
            <p className="list-item-message" dangerouslySetInnerHTML={{__html: tweet.message}} />
            { tweet.image && <img src={tweet.image} className="list-item-image" alt=""/> }

            <ActionBar {...tweet.shares} />
        </div>
    </div>
);
