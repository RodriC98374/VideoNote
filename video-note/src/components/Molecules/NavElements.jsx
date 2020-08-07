import React from 'react'
import logo from '../../images/Logo.png'
import NavItems from '../Atoms/NavItems'

const NavElements = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-0">
                <div className="container d-flex justify-content-space">
                    <a className="navbar-brand p-0" href="./bootstrap.html">
                        <img src={logo} alt="VideoNote"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavItems />
                </div>
    </nav>
)

export default NavElements