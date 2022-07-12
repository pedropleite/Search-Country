import React from 'react';
import { Ul } from './Styles';

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sign In</li>
        </Ul>
    );
};

export default RightNav;
