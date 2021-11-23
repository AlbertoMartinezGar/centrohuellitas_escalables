import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg justify-content-around">

            <Link to="/" className="brand display-flex align-items-center justify-content-center text-center">
                <i className="fas fa-paw paw-icon"></i>
                <p className="title display-flex">Centro Huellitas</p>
            </Link>

            <div className="sections">
                <ul className="navbar-nav mr-auto">
                    <li className="list-element"><Link to="/">Home</Link></li>
                    <li className="list-element"><Link to="/eventos">Eventos</Link></li>
                    <li className="list-element"><Link to="/mascotas">Mascotas</Link></li>
                    <li className="list-element"><Link to="/">Pagos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;