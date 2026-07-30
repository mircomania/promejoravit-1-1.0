import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp2 } from '../imports/SectionLp2';
import { SectionLp5 } from '../imports/SectionLp5';

const RegistroPage = () => {
    return (
        <main>
            <TitleSEO
                title="Mejoravit | Registro"
                description="Conoce el proceso de registro para solicitar tu crédito Mejoravit. Descubre los requisitos, completa tu información y comienza tu precalificación en línea."
                canonical="https://creditosoloparati.com.mx/registro"
            />

            <SectionLp2 />

            <SectionLp5 />
        </main>
    );
};

export default RegistroPage;
