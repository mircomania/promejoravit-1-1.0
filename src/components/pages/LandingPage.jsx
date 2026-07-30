import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp1 } from '../imports/SectionLp1';
import { SectionLp5 } from '../imports/SectionLp5';

const LandingPage = () => {
    return (
        <main>
            <TitleSEO
                title="Mejoravit | Precalifica Ahora"
                description="Solicita tu Mejoravit Rápido, fácil y con cobertura a nivel nacional. ¡Solicítalo en línea hoy!"
                canonical="https://creditosoloparati.com.mx"
            />

            <SectionLp1 />

            <SectionLp5 />
        </main>
    );
};

export default LandingPage;
