import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItems = () => (
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item p-2">
                <NavLink className="nav-link" exact to="/" activeClassName="activo">Inicio</NavLink>
            </li>
            <li className="nav-item p-2">
                <NavLink className="nav-link" to="/materias">Materias</NavLink>
            </li>
            <li className="nav-item p-2">
                <NavLink className="nav-link" to="/Acerca_De">Acerca De</NavLink>
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