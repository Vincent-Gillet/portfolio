import { skillsList } from '../../../data/skills.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {

    const skills = skillsList.map((skill) => (
        <div className='skill-container col-5 col-sm-2 d-flex flex-column align-items-center' key={skill.name}>
            <div className='icon-skill'>
                <FontAwesomeIcon icon={skill.icon} />
            </div>
            <p className='label-skill'>{skill.name}</p>
        </div>
    ));

    return (
        <div className='container'>
            <h3 className='title-h3 text-center m-4'>Compétences</h3>
            <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-5 skills-container">
                {skills}
            </div>   
        </div>
    );

}

export default Skills;