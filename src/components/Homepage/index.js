import InfoContainer from '../InfoContainer';

import Header from '../Header';
import HomeSection from '../HomeSection';


const Homepage = () => {
    return(
        <>
            <Header />
            <div className="container-fluid w-75">
                <InfoContainer category="eventos" />
                <InfoContainer category="mascotas" />
                <h1>Todas las secciones</h1>
                <div className="row mt-5 d-flex justify-content-between">
                    <HomeSection name="Todas las mascotas" route="/mascotas"/>
                    <HomeSection name="Registrar nueva mascota" route="/agregarmascota"/>
                </div>
                <div className="row mt-3 d-flex justify-content-between">
                    <HomeSection name="Todos los eventos" route="/eventos"/>
                    <HomeSection name="Registrar nuevo evento" route="/agregarevento"/>
                </div>
                <div className="row mt-3 mb-5 d-flex justify-content-center">
                    <HomeSection name="Pagos"/>
                </div>
            </div>
            
        </>
    )
}

export default Homepage;