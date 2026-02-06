import { experiencesList } from '../../../data/experiences.tsx';

function Experience() {

    const experiences = experiencesList.map((exp) => (
        <li key={exp.id}>
            <p><strong>{exp.date} :</strong> {exp.poste} chez {exp.entreprise} <br></br>
            <em>{exp.description}</em></p>
            <div className='d-flex mb-3 flex-wrap gap-2'>
                <p className='mb-0'><strong>Technologies utilisées :</strong></p> 
                <div className='d-flex gap-1 ms-2 flex-wrap'>
                    {exp.technologies
                        .map(tech => {
                            return <span key={tech} className='badge technology-used d-flex align-items-center'>{tech}</span>;
                        })
                    }
                </div>
            </div>
        </li>
    ));

    return (
        <div className='container'>
            <h3 className='title-h3 text-center m-4'>Expériences professionnelles</h3>
            <div className="row justify-content-center">
                <div className='col-12 col-md-10 col-lg-8'>
                    <ul>
                        {experiences}
                    </ul>                       
                </div>
            </div>     
        </div>
    );

}

export default Experience;