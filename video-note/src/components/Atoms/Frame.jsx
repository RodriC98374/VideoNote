import React from 'react'

const Frame = ({url, title}) => (
    <div class="screen col col-lg-8 d-flex justify-content-center align-middle">
        <iframe class="video-embeded" src={url} frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={title}></iframe>
    </div>
)

export default Frame