import React, {useContext} from 'react';
import gravatarHelper from '../../helpers/gravatar';
import {UserContext} from '../Global/App';
import {User} from '../../interfaces';
import '../../stylesheets/components/writer-block.scss';

interface SimpleWriterProps {
  focus: () => void;
}

export const SimpleWriter = ({focus}: SimpleWriterProps) => {
  const user: User = useContext(UserContext);

  return (
    <div className="writer-block--fold">
      <img src={ gravatarHelper.getAvatar(user.email) } alt={user.name} className="avatar" />
      <input type="text" placeholder="Ecrivez votre texte ici..." onFocus={focus}/>
      <i className="fa fa-picture-o"/>
    </div>
  );
};
