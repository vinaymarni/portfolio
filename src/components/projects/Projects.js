import React, { useState } from 'react'
import Button from '../../commonElements/Button';
import projectPosterImg from '../../images/projectPoster.jpg';
import './projects.css';
import { projectDetails } from '../../data';
import ProjectDetailsPopup from './ProjectDetailsPopup';

export default function Projects() {
  const [popupData, setPopupData ] = useState({isPopup: false});

  const onPopupClick = (identifier, data, index) => {
    let obj = {};
    if(identifier == "OPEN"){
        obj = {
            isPopup: true,
            data: data,
            index: index,
        }
    }else{
        obj = { isPopup: false}
    }

    setPopupData(obj);
  };

  return (
    <div className="projectsMainCon">

        {popupData.isPopup &&
        <ProjectDetailsPopup 
            onPopupClick={onPopupClick} 
            popupData={popupData}
        />
        }

        {projectDetails.map((eachCrad, index)=>{
            return(
                <div key={`projCard_${index}`}  id={`${eachCrad.name}_block`} className="projectCard">
                    <p className="projectCount">Project {index+1}</p>
                    <h3 className="projectHeading">_{eachCrad.name}</h3>
                    <div className="innerProjectCard">
                        <div style={{backgroundImage: `url(${projectPosterImg})`}} className="innerProjectCardTopCon">
                            <div className='innerProjectTechnologiesCon'>
                                {eachCrad.technologiesUsed.map((eachTech, eachIndex)=>{
                                    return(
                                        <img key={`eachTech_${eachIndex}`} alt="" src={eachTech.url} className="projectTechImg" />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="innerProjectCardBottomCon">
                            <p className="projectCardDesc">{eachCrad.description}</p>
                            <Button
                                key="project_btn_1"
                                buttonId ="project_btn_1"
                                buttonConClassName="projectBtnCon"
                                buttonClassName="projectBtn"
                                onSubmit={(e)=>onPopupClick("OPEN", eachCrad, index)}
                                title="view-project"
                            />
                        </div>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}
