import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav class="navbar navbar-expand-lg justify-content-around">

            <Link to="/">
                <i class="fas fa-paw paw-icon"></i>
                <p class="title display-flex">Centro Huellitas</p>
            </Link>

            <div class="sections">
                <ul class="navbar-nav mr-auto">
                    <li class="list-element"><Link to="/">Home</Link></li>
                    <li class="list-element"><Link to="/">Eventos</Link></li>
                    <li class="list-element"><Link to="/mascotas">Mascotas</Link></li>
                    <li class="list-element"><Link to="/">Pagos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;