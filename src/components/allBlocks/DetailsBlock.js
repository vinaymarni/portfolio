import React, { useState } from 'react';
import './allDetailsBlock.css';
import { arrowIcon, companyIcon, crossIcon, folderIcon, singleLineArrowIcon } from '../../icons';
import Button from '../../commonElements/Button';
import Expereince from '../expereince/Expereince';
import { companyDetails, srollIntoView } from '../../data';

const DetailsBlock = ({block, onSelect, selectedSections}) => {

    const [selectedCompany, setSelectedCompany] = useState(companyDetails[0].companyName);

    const onSelectCompany = (companyName) => {
        setSelectedCompany(companyName);
        srollIntoView(`${companyName}_block`);
    };

    return (
        <div className="allDetailsBlockMainCon">
            <div className="allDetailsSideBar">
                <Button
                    key="_hello_dropwon"
                    buttonId ="_hello_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Hello" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_hello"
                    name="hello"
                    value={"Hello"}
                    icon={<span className={`dropdownArrow ${block == "Hello" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                <Button
                    key="_experience_dropwon"
                    buttonId ="_experience_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Experience" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_experience"
                    name="experience"
                    value={"Experience"}
                    icon={<span className={`dropdownArrow ${block == "Experience" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                {block == "Experience" &&
                <div className="sideEachDropdownBottomFoldersCon" >
                    <p className="sideEachDropdownCon mainFolderHeading" >{singleLineArrowIcon} {folderIcon} Experience </p>
                    <div className="showingComapnysCon">
                        {companyDetails.map((eachCmny, eachInd)=>{
                            return(
                                <p key={`cmpny_${eachInd}`} className={`showingComapny ${selectedCompany == eachCmny.companyName ? "selectedsideEachDropdownCon" : "" }`} onClick={()=>onSelectCompany(eachCmny.companyName)}>
                                    <span style={{opacity: selectedCompany == eachCmny.companyName ? "1" : "0.5" }} className="nxtCompanyIcon">{companyIcon}</span> 
                                    <span className={`${selectedCompany == eachCmny.companyName ? "selectedsideEachDropdownCon" : "" }`}>{eachCmny.companyName}</span>
                                </p>
                            )
                        })}
                    
                    </div>
                </div>
                }

                <Button
                    key="_skill_dropwon"
                    buttonId ="_skill_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Skill" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_skill"
                    name="skill"
                    value={"Skill"}
                    icon={<span className={`dropdownArrow ${block == "Skill" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />
                <Button
                    key="_education_dropwon"
                    buttonId ="_education_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Education" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_education"
                    name="education"
                    value={"Education"}
                    icon={<span className={`dropdownArrow ${block == "Education" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />
                <Button
                    key="_projects_dropwon"
                    buttonId ="_projects_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Projects" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_projects"
                    name="projects"
                    value={"Projects"}
                    icon={<span className={`dropdownArrow ${block == "Projects" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                <Button
                    key="_profile_dropwon"
                    buttonId ="_profile_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Profile" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_profile"
                    name="profile"
                    value={"Profile"}
                    icon={<span className={`dropdownArrow ${block == "Profile" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

                <Button
                    key="_contact-me_dropwon"
                    buttonId ="_contact-me_dropwon"
                    buttonClassName={`sideEachDropdownCon ${block == "Contact-me" ? "selectedsideEachDropdownCon":""}`}
                    onSubmit={(e)=>onSelect(e)}
                    title="_contact-me"
                    name="contact-me"
                    value={"Contact-me"}
                    icon={<span className={`dropdownArrow ${block == "Contact-me" ? "selectedArrow" : ""}`}>{arrowIcon}</span>}
                />

            </div>
            <div className="allDetailsRightSideCon">
{/* Selected Items Header */}
                <div className="allDetailsRightSideHeaderCon">
                    {selectedSections && selectedSections.length > 0 && 
                        selectedSections.map((eachSection, index) =>{
                            return(
                                <div key={index} onClick={()=>onSelect({target:{value: eachSection}})} className='headerSectionNamesCon' style={{color: eachSection == block ? "#FFF" : "" }} >
                                    <span className={`folderIcon ${eachSection == block ? "selectedFolderIcon" : ""}`}>{folderIcon}</span>{eachSection} 
                                    <span className='sectionBtnCross' onClick={()=>onSelect(undefined, eachSection, index)} >
                                        {crossIcon}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

{/* Selected Section Display Container */}
                <div className='slectedSectionMainCon'>
                    <hr className="hrLineInCenter" />
                    {block == "Experience" &&
                    <Expereince  />
                    }
                </div>

            </div>
        </div>
    );
}


export default DetailsBlock;