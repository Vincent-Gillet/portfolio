import Presentation from '../../components/homepage/presentation/Presentation';
import A_propos from '../../components/homepage/a-propos/A-propos';
import Contact from '../../components/homepage/contact/Contact';

function Homepage() {
  return (
    <div>
        <Presentation />
        <A_propos />
        <Contact />
    </div>
  );
}

export default Homepage;