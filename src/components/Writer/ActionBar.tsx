import React from 'react';
import classnames from 'classnames';

interface ActionBarProps {
  submit?: () => void;
  textSize: number;
}

export const ActionBar = ({ textSize, submit = () => undefined }: ActionBarProps) => {
    const MAX_LENGTH = 140,
        remainingChars = MAX_LENGTH - textSize,
        isBelowEnd = 0 > remainingChars,
        isNearTheEnd = !isBelowEnd && 20 >=remainingChars,
        isTweetable = !isBelowEnd && MAX_LENGTH !== remainingChars;

    return (
        <p className="writer-actions">
            <span className="writer-actions-controls-block">
                <i className="fa fa-picture-o fa-border fa-fw" />
                <i className="fa fa-th-list fa-border fa-fw" />
                <i className="fa fa-map-marker fa-border fa-fw" />
            </span>
            <span className="writer-actions-submit-block">
                <span className={classnames(
                    'writer-actions-counter',
                    {
                        'writer-actions-counter--danger': isNearTheEnd,
                        'writer-actions-counter--alert': isBelowEnd,
                    }
                )}>{ remainingChars }</span>
                <button
                    onClick={submit}
                    className={classnames('writer-actions-submit', {'writer-actions-submit--disabled': !isTweetable})}>
                    Tweeter
                </button>
            </span>
        </p>
    );
};
