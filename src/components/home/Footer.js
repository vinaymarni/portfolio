import React from 'react';
import './home.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import leetcodeImg from '../../images/leetcode.png';
import linkdinImg from '../../images/linkdin.png';
import leetcodeGrayImg from '../../images/leetcodeGray.png';
import { basicDetails } from '../../data';

const Footer = () => {
    return (
        <footer className="footerMianCon">
            <p className="footerFindMeText">find me in:</p>
            <div className="footerIconHoldingCon">
                <img className='footerSocialIcons' src={githubImg} alt="" />
            </div>
            <div className="footerIconHoldingCon">
                <img className='footerSocialIcons' src={linkdinImg} alt="" />
            </div>
            <div className="footerIconHoldingCon">
                <img className='footerSocialIcons' src={leetcodeGrayImg} alt="" />
            </div>
            <div className="footerFindMeText footerCornerEmailBox">
                {basicDetails.email}
                <img src={emailImg} alt="" />
            </div>
        </footer>
    );
};

export default Footer;