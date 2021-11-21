import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <nav class="navbar navbar-expand-lg justify-content-around">

            <a class="brand display-flex align-items-center justify-content-center text-center" href="#">
                <i class="fas fa-paw paw-icon"></i>
                <p class="title display-flex">Centro Huellitas</p>
            </a>

            <div class="sections">
                <ul class="navbar-nav mr-auto">
                    <li class="list-element"><a href="">Home</a></li>
                    <li class="list-element"><a href="">Eventos</a></li>
                    <li class="list-element"><a href="">Mascotas</a></li>
                    <li class="list-element"><a href="">Pagos</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;