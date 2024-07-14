import React, { useEffect, useState } from 'react';
import './home.css';

import emailImg from '../../images/email.png';
import githubImg from '../../images/github.png';
import leetcodeImg from '../../images/leetcode.png';
import linkdinImg from '../../images/linkdin.png';
import Button from '../../commonElements/Button';
import { fileIcon } from '../../icons';
import { basicDetails } from '../../data';

const Home = () => {
    const texts = basicDetails.workingRoles;
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * texts.length);
          setCurrentText(texts[randomIndex]);
        }, 500);
    
        return () => clearInterval(intervalId);
    }, [texts]);

    return (
        <div className="homeMianCon">
            <div className="homeLeftSideCon">
                <span className="leftSideSpan">Hi all. I am</span>
                <h2 className="leftSideUsername line-1 anim-typewriter">{basicDetails.name}</h2>

                <div className="homeRightSideConForMobile">
                    <img alt="" src="https://w0.peakpx.com/wallpaper/454/815/HD-wallpaper-naruto-art-fictional-character-thumbnail.jpg" className="profileImage" />
                </div>

                <p className="leftSideUserRole">&gt; <span style={{color : currentText == "Java Full-Stack" ? "#43D9AD" : currentText == "Web" ? "#C99FFF" : "#8C99FF" }}>{currentText}</span> Developer</p>

                <p className="leftSideObjective">{basicDetails.careerObjective}</p>
                <Button
                    key="Resume"
                    buttonId ="Resume"
                    buttonClassName="resumeBtn"
                    onSubmit={()=>("")}
                    title="Resume"
                    name="Resume"
                    value={0}
                    icon={fileIcon}
                />
            </div>

            <div className="homeRightSideCon">
                <img alt="" src="https://w0.peakpx.com/wallpaper/454/815/HD-wallpaper-naruto-art-fictional-character-thumbnail.jpg" className="profileImage" />
                <div className="siderIconsCon">
                    <span>Follow me---------</span>
                    <div className="iconHoldingCon">
                        <img className='rightSideSocialIcons' src={emailImg} alt="" />
                    </div>

                    <div className="iconHoldingCon">
                        <img className='rightSideSocialIcons' src={githubImg} alt="" />
                    </div>

                    <div className="iconHoldingCon">
                        <img className='rightSideSocialIcons' src={leetcodeImg} alt="" />
                    </div>

                    <div className="iconHoldingCon">
                        <img className='rightSideSocialIcons' src={linkdinImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="siderIconsConForMobile">
                    <p>Follow me</p>

                    <div className="iconHoldingConForMobile">
                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={emailImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={githubImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={leetcodeImg} alt="" />
                        </div>

                        <div className="iconHoldingCon">
                            <img className='rightSideSocialIcons' src={linkdinImg} alt="" />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;