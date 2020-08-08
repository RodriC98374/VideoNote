import React from 'react'
import '../../scripts/carouselFuntions'
import MediaCarousel from './MediaCarousel'

const Carousel = ({videos}) => (
    <div class="carousel text-center">
        <h3 class="m-3">Lo mas popular</h3>
        <div class="corousel-conteiner px-5">
            <button aria-label="back" class="row-back">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="media-carousel my-3 bg-transparent">
                <MediaCarousel media={videos} />
            </div>
            <button aria-label="next" class="row-next">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div role="tablist" class="slide-points"></div>
        </div>
) 

export default Carousel