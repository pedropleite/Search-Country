import React from 'react';
import Burger from '../Burger/Burger';
import { Nav, Logo } from './Styles';

const Header = () => {
    return (
        <Nav>
            <Logo className="logo">
                <div>
                    <span>W</span>
                    <span>O</span>
                    <span>R</span>
                    <span>L</span>
                    <span>D</span>
                </div>
            </Logo>
            <Burger />
        </Nav>
    );
};

export default Header;
