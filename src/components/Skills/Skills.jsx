import React, { useState } from "react";
import './Skills.css';
import Skillcard from "./Skillcard/Skillcard";
import data from "../../utils/data";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";

const Skills = () => {
  const[selectedSkill, setSelectedSkill] = useState(data[0]);
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }

  return (
      <section className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
              {
                data.map((values) => {
                 return(
                  <Skillcard 
                  key={values.title}
                  iconUrl={values.imageUrl}
                  title={values.title} 
                  isActive={selectedSkill.title === values.title}
                  onClick={()=> {
                    handleSelectedSkill(values);
                  }}/>
                 ); 
                })
              }
            </div>
            
            <div className="skills-info">
              <SkillInfoCard 
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
      </section>
  );
};

export default Skills;
