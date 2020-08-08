import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({id, image, title}) => (
    <div class="m-2">
        <Link to={`/video/${id}`}>
            <img src={image} class="card img-fluid" alt={title}/>
        </Link>
        {
            console.log(image)
        }
        <p class="card-text">{title}</p>
    </div>
)

export default VideoCard