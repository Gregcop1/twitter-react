import React from 'react';
import classnames from 'classnames';
import {Share} from '../../interfaces';

export const ActionBar = ({ answer, like, retweet }: Share) => (
    <p className="list-item-actions">
        <button className={classnames('fa fa-comment-o fa-fw answer', {active: !!answer})} >{ answer }</button>
        <button className={classnames('fa fa-retweet fa-fw retweet', {active: !!retweet})} >{ retweet }</button>
        <button className={classnames('fa fa-fw like', {active: !!like, 'fa-heart': !!like, 'fa-heart-o': !like})} >{ like }</button>
        <button className="fa fa-envelope-o fa-fw pm" />
    </p>
);
