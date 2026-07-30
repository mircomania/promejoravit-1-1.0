import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp4 } from '../imports/SectionLp4';
import { SectionLp5 } from '../imports/SectionLp5';

const BeneficiosPage = () => {
    return (
        <main>
            <TitleSEO
                title="Mejoravit | Beneficios"
                description="Descubre los beneficios del crédito Mejoravit para remodelar, ampliar o mejorar tu vivienda con un proceso ágil y atención personalizada."
                canonical="https://creditosoloparati.com.mx/beneficios"
            />

            <SectionLp4 />

            <SectionLp5 />
        </main>
    );
};

export default BeneficiosPage;
