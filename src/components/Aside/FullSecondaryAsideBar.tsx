import React from 'react';
import Suggestion from './Suggestion';

const FullSecondaryAsideBar = () => (
    <aside className="column aside-secondary">
        <Suggestion/>
    </aside>
);

export const withFullSecondaryAsideBar = (WrappedComponent: any) => (props: any) => (
    <div className="transparent-container">
        <WrappedComponent {...props}/>
        <FullSecondaryAsideBar/>
    </div>
);

export default FullSecondaryAsideBar;
