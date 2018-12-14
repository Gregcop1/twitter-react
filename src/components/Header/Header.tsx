import React, { useMemo } from 'react';
import Nav from './Nav';
import { Logo } from './Logo';
import './header.scss';

export const Header = () => (
    <header className="main-header">
        <div className="container">
            <Nav />
            <p className="logo">
                <Logo className="logo" loading={true} />
            </p>
        </div>
    </header>
);
