import { schoolsList } from '../../../data/schools.tsx';

function Cours() {

    const school = schoolsList.map((schoolItem) => (
        <li key={schoolItem.diplome}>
            <p><strong>{schoolItem.date} :</strong> {schoolItem.diplome} - {schoolItem.etablissement}</p>
        </li>
    ));

    return (
        <div className='container'>
            <h3 className='title-h3 text-center m-4'>Parcours</h3>
            <div className="row justify-content-center">
                <div className='col-12 col-md-8 col-lg-6'>
                    <ul>
                        {school}
                    </ul>
                </div>
            </div>        
        </div>
    );

}

export default Cours;