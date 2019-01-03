import React from 'react';
import ShortProfile from './ShortProfile';
import Trend from './Trend';

const FullPrimaryAsideBar = () => (
    <aside className="column aside-primary">
        <ShortProfile />
        <Trend/>
    </aside>
);

export const withFullPrimaryAsideBar = (WrappedComponent: any) => (props: any) => (
    <div className="transparent-container">
        <FullPrimaryAsideBar/>
        <WrappedComponent {...props}/>
    </div>
);

export default FullPrimaryAsideBar;
