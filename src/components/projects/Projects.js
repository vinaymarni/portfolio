import React from 'react'
import Button from '../../commonElements/Button';
import projectPosterImg from '../../images/projectPoster.jpg';
import './projects.css';
import { projectDetails } from '../../data';

export default function Projects() {
  return (
    <div className="projectsMainCon">
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
                                        <img key={`eachTech_${eachIndex}`} alt="" src={eachTech} className="projectTechImg" />
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
                                onSubmit={(e)=>("")}
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
