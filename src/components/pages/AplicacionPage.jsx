import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp3 } from '../imports/SectionLp3';
import { SectionLp5 } from '../imports/SectionLp5';

const AplicacionPage = () => {
    return (
        <main>
            <TitleSEO
                title="Mejoravit | Aplicacion"
                description="Aprende cómo realizar tu solicitud de crédito Mejoravit paso a paso. Te explicamos el proceso para aplicar de forma rápida, sencilla y segura."
                canonical="https://creditosoloparati.com.mx/aplicacion"
            />

            <SectionLp3 />

            <SectionLp5 />
        </main>
    );
};

export default AplicacionPage;
