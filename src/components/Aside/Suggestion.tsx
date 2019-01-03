import React from 'react';
import '../../stylesheets/components/suggestion.scss';

const Suggestion = () => (
    <div className="block suggestion-list">
        <h3>Suggestions</h3>
        <ul>
            <li>
                <img src="avatar-machinerie.jpg" className="suggestion-avatar" width="48" height="48" alt=""/>
                <div className="suggestion-metas">
                    <p className="suggestion-infos">
                        La machinerie
                        <span className="suggestion-account">@lamachinerie</span>
                        <button>Suivre</button>
                    </p>
                </div>
            </li>
            <li>
                <img src="avatar-euratech.jpg" className="suggestion-avatar" width="48" height="48" alt=""/>
                <div className="suggestion-metas">
                    <p className="suggestion-infos">
                        EuraTechnologie
                        <span className="suggestion-account">@euratechnologie</span>
                        <button>Suivre</button>
                    </p>
                </div>
            </li>
            <li>
                <img src="avatar-typo3.jpg" className="suggestion-avatar" width="48" height="48" alt=""/>
                <div className="suggestion-metas">
                    <p className="suggestion-infos">
                        TYPO3 France
                        <span className="suggestion-account">@TYPO3France</span>
                        <button>Suivre</button>
                    </p>
                </div>
            </li>
        </ul>
        <button className="suggestion-call-to-action">Connecter d'autres carnets d'addresses</button>
    </div>
);

export default Suggestion;
