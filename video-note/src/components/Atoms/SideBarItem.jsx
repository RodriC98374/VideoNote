import React from 'react'

const SideBarItems = ({nameItem, n}) => (
    <li class="nav-item pl-5">
        <div class="custom-control custom-checkbox mt-2">
            <input type="radio" id={`customRadio${n}`}name="customRadio" class="custom-control-input"/>
            <label class="custom-control-label" for={`customRadio${n}`}> {nameItem} </label>
        </div>
    </li>
)

export default SideBarItems