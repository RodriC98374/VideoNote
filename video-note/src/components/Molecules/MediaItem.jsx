import React from 'react'
import { Link } from 'react-router-dom'

const MediaItem = ({id, name, image, title}) => (
    <div class="m-2">
        <Link to={`materias/${name}/${id}`}>
            <img src={image} class="card img-fluid" alt={title}/>
        </Link>

        <p class="card-text">{title}</p>
    </div>
)

export default MediaItem