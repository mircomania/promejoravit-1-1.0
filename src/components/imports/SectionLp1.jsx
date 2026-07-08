import styles from '../../styles/modules/sectionLp1.module.css';
import img1Section from '../../assets/images/img-section-lp-1.webp';
import imgFlecha from '../../assets/images/flecha-home.webp';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <p className="light-text">Solicita tu</p>

                <h1 className="bold-text">Mejoravit</h1>

                <p className="light-text">En minutos</p>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img1Section} alt="Ejecutiva animada de Mejoravit" className={styles.img1Section} />

                <div className={styles.contenido1}>
                    <BotonNav dataCta="home-btn-1" />

                    <img src={imgFlecha} alt="Flecha apuntando al botón de precalificación Mejoravit" className={styles.imgFlecha} />

                    <h2 className="bold-text">¡PRECALIFICA AHORA!</h2>

                    <h3 className="light-text">Rápido, fácil y con cobertura a nivel nacional</h3>
                </div>
            </div>

            {/* FONDO ANIMADO */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
        </section>
    );
};
