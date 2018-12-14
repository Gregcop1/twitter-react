import React, {useContext, useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionBar} from './ActionBar';
import {addTweet} from '../../redux/actions';
import {User} from '../../interfaces';
import {UserContext} from '../Global/App';

interface FullWriterProps {
  leave: () => void;
  submit: (u: User, m: string) => void;
}

const FullWriterView = ({leave, submit}: FullWriterProps) => {
  const user:User = useContext(UserContext);
  const input = useRef(null);
  const [value, changeValue] = useState('');
  const blur = () => '' === value.trim() && leave();

  // focus on mount
  useEffect(() => {
    const field: HTMLInputElement = input.current!;
    field.focus();
  }, []);

  return (
    <div className="writer-block--unfold">
      <textarea
        ref={input}
        rows={3}
        onChange={(e) => changeValue(e.target.value)}
        onBlur={blur}
        value={value}/>
      <ActionBar textSize={value.length} submit={() => {
        submit(user, value);
        changeValue('');
        leave();
      }}/>
    </div>
  );
};

export const FullWriter = connect(
  undefined,
  (dispatch: Dispatch) => ({
    submit: (user: User, message: string) => dispatch(addTweet(user, message))
  })
)(FullWriterView);
