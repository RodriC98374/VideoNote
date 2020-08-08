import React from 'react'
import MediaItem from '../Molecules/MediaItem'


const MediaCarousel = ({media}) => (
    <div className="no-gutters">
        {
            media.map(m => (
                <MediaItem 
                    id={m.id}
                    name={m.name}
                    image={m.image}
                    title={m.title}
                />
            ))
        }
    </div>
)

export default  MediaCarousel