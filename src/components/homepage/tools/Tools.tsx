import { toolsList } from '../../../data/tools.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tools() {

    const tools = toolsList.map((tool) => (
        <div className='skill-container col-5 col-sm-2 d-flex flex-column align-items-center' key={tool.name}>
            <div className='icon-skill'>
                <FontAwesomeIcon icon={tool.icon} />
            </div>
            <p className='label-skill'>{tool.name}</p>
        </div>
    ));

    return (
        <div className='container'>
            <h3 className='title-h3 text-center m-4'>Outils</h3>
            <div className="row gap-auto justify-content-center justify-content-sm-start mt-4 mb-5 skills-container">
                {tools}
            </div>
        </div>
    );

}

export default Tools;