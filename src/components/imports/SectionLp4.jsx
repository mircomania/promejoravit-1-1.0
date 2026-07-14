import styles from '../../styles/modules/sectionLp4.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconosSectionLp4 } from '../utils/iconosSectionLp4';

export const SectionLp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">Beneficios Mejoravit</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.iconsContainer}>
                    {iconosSectionLp4.map(({ id, icon, text }) => (
                        <div key={id} className={styles.iconContainer}>
                            <FontAwesomeIcon icon={icon} className={styles.icon} />
                            <p className="light-text">{text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.parrafoContainer}>
                    <p className="light-text">
                        Obtén hoy tu Mejoravit 2026. atención veloz 100% personalizada. Te ayudamos a usar tu fondo para remodelar, mejorar tu
                        vivienda o lo que tu quieras. Realiza hoy mismo tu precalificación Infonavit en pocos minutos y comienza ahora.
                    </p>

                    <h3 className="bold-text">Diseñado para ti</h3>
                </div>
            </div>
        </section>
    );
};
