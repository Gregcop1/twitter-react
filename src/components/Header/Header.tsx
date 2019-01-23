import React, { useMemo } from 'react';
import Nav from './Nav';
import { Logo } from './Logo';
import './header.scss';
import {connect} from 'react-redux';

interface HeaderViewProps {
  pending: boolean,
}

const HeaderView = ({pending}: HeaderViewProps) => (
    <header className="main-header">
        <div className="container">
            <Nav />
            <p className="logo">
                <Logo className="logo" loading={pending} />
            </p>
        </div>
    </header>
);

const withPending = connect(
  ({pending}: any) => ({
    pending,
  }),
);

export const Header = withPending(HeaderView)
