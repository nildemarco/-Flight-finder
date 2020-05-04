import React from 'react';
import { FooterContainer } from './Footer.style';
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainer>
            <h3>Flight Inspiration</h3>
            <span>
                <AiFillInstagram className="icons-footer"/>
                <AiFillFacebook className="icons-footer"/>
                <AiFillTwitterCircle className="icons-footer"/></span>
            <ul>
                <li>Contact</li>
                <li>About us</li>
                <li>Terms and Conditions</li>
            </ul>
        </FooterContainer>
    );
}

export default Footer;