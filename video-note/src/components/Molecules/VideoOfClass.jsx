import React from 'react'
import { Link } from 'react-router-dom'

const VideoOfClass = ({id, name, image, title}) => (
    <div class="media-video mt-3">
        <Link to={`materias/${name}/${id}`} class="card">
            <img src={image} class="img-fluid" alt={title} />
        </Link>
        <p class="card-text text-center"> {title} </p>
    </div>
) 

export default VideoOfClass