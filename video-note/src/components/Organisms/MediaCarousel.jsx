import React from 'react'
import VideoCard from '../Molecules/VideoCard'

const MediaCarousel = ({media}) => (
    <div className="no-gutters">
        {
            media.map(m => (
                <VideoCard 
                    key={m.id}
                    id={m.id}
                    image={m.image}
                    title={m.title}
                />
            ))
        }
    </div>
)

export default  MediaCarousel