import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/common/NavBar';
import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './hooks/ScrollTop';
import { WhatsAppIcon } from './components/utils/WhatsAppIcon';
import { Footer } from './components/common/Footer';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const RegistroPage = lazy(() => import('./components/pages/RegistroPage'));
const AplicacionPage = lazy(() => import('./components/pages/AplicacionPage'));
const BeneficiosPage = lazy(() => import('./components/pages/BeneficiosPage'));
const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const FaqPage = lazy(() => import('./components/pages/FaqPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    return (
        <>
            <ScrollToTop />

            <NavBar />

            <WhatsAppIcon />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/registro" element={<RegistroPage />}></Route>
                    <Route path="/aplicacion" element={<AplicacionPage />}></Route>
                    <Route path="/beneficios" element={<BeneficiosPage />}></Route>
                    <Route path="/politica-privacidad" element={<PoliticasPage />}></Route>
                    <Route path="/faq" element={<FaqPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
