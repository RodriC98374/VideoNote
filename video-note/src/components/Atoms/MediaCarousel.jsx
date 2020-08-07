import React from 'react'

const MediaCarousel = ({VideoSrc, VideoName}) => (
    <div class="media-carousel my-3 bg-transparent">
        <div class="m-2">
            <img src={VideoSrc} class="card img-fluid" alt={VideoName}/>
            <p class="card-text"> {VideoName} </p>
        </div>
    </div>
)
export default MediaCarousel