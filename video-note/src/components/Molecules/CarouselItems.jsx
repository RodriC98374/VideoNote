import React from 'react'
import MediaCarousel from '../Atoms/MediaCarousel'
import 'https://cdn.jsdelivr.net/npm/glider-js@1.7.3/glider.js'
import '../../scripts/carouselFuntions'


const CorouselItems = () => (
    <>
        <div class="corousel-conteiner px-5">
                    <button aria-label="back" class="row-back">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <MediaCarousel VideoSrc="https://cdn.pixabay.com/photo/2020/06/21/04/25/nyc-5323170__340.jpg" VideoName="Tema III: introuccion"/>
                    <button aria-label="next" class="row-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
        </div>
        <div role="tablist" class="slide-points"></div>
    </>
)

export default CorouselItems