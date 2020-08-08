import React from 'react'
import useVideo from '../customHooks/useVideo'

const Video = ({ match }) => {
    
    const video = useVideo(match.params.id)

    return(
        <section class="conteiner-fluid main-content-page col py-5 d-flex">
            <div class="play-video col col-lg-12 d-flex p-0">
                <div class="screen col col-lg-8 d-flex justify-content-center align-middle">
                <iframe class="video-embeded" src={video.url} frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            </div>
        </section>
    )
}

export default Video