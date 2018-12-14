import React from 'react';

const TwitterLogo = () => <i className="fa fa-twitter fa-fw"/>;
const Spinner = () => <i className="fa fa-spinner fa-pulse fa-fw"/>;

interface LogoProps {
    className: string|Object;
    loading?: boolean;
}

export const Logo = ({loading = false}: LogoProps) => (
    loading ?
        <Spinner/> :
        <TwitterLogo/>
);
