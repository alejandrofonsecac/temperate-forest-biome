import Hero from '../components/sections/Hero';
import Caracterizacao from '../components/sections/Caracterizacao';
import Biodiversidade from '../components/sections/Biodiversidade';
import FaunaSection from '../components/sections/FaunaSection';
import FloraSection from '../components/sections/FloraSection';
import ImpactosHumanos from '../components/sections/ImpactosHumanos';
import Referencias from '../components/sections/Referencias';

function Home() {
  return (
    <>
      <Hero />
      <Caracterizacao />
      <Biodiversidade />
      <FaunaSection />
      <FloraSection />
      <ImpactosHumanos />
      <Referencias />
    </>
  );
}

export default Home;