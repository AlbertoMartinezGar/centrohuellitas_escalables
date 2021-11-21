import InfoContainer from '../InfoContainer';

import Header from '../Header';


const Homepage = () => {
    return(
        <>
            <Header />
            <div className="container-fluid w-75">
                <InfoContainer category="eventos" />
                <InfoContainer category="mascotas" />
            </div>
            
        </>
    )
}

export default Homepage;