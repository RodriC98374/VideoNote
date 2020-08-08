import React from 'react'
import SideBarItems from '../Atoms/SideBarItem'
import { Link } from 'react-router-dom'

const SideBar = () => (
    <div class="conteiner col-lg-2 offset-lg-1 mr-3 p-0">
        <ul class="nav flex-column order-var p-1">
            <li class="nav-item">
                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ordenar por:</Link>
            </li>
            <SideBarItems nameItem="Recientes" n="1"/>
            <SideBarItems nameItem="Mas antiguos" n="2"/>
            <SideBarItems nameItem="Alfabeticamente" n="2"/>
            <li class="nav-item">
                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Clasificar por:</Link>
            </li>
            <SideBarItems nameItem="Clases Grabadas" n="4"/>
            <SideBarItems nameItem="Videos de apoyo" n="5"/>
            <SideBarItems nameItem="Otros" n="6"/>
        </ul>
    </div>
)

export default SideBar