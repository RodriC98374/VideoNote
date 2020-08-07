import React from 'react'

const NavItems = () => (
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item p-2">
                                <a className="nav-link" href="./index.html">Inicio</a>
            </li>
            <li className="nav-item p-2">
                <a className="nav-link" href="./materias.html">Materias</a>
            </li>
            <li className="nav-item p-2">
                <a className="nav-link" href="#clientes">Acerca De</a>
            </li>
            <li className="nav-item p-2">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="¿Que desea buscar?" aria-label="search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
            </li>
        </ul>
    </div>
)
export default NavItems