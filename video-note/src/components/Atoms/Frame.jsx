import React from 'react'

const Frame = ({url, title}) => (
    <div class="screen col col-lg-8 d-flex justify-content-center align-middle">
        <iframe src={url} title={title} className="video-embeded"></iframe>
    </div>
)

export default Frame