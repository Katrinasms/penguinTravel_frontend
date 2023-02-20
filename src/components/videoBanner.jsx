import Pimg from "../assets/banner1.JPG" 
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {FadeUp} from "../service/scrollAnimate"

const VideoBanner =() => {
    return (
        <FadeUp>
        <div className="vedio-banner-section relative h-sm-b-h md:h-full text-blue-300">
            <img className="object-cover h-full w-full" src="./images/photos/falkland/Falkland1.jpeg"
            alt="banner image" loading="lazy" width="1920" height="902" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full xl:max-w-3xl lg:px-10 px-4">
                <h3 className="font-playfair font-bold text-orange text-lg sm:text-4xl lg:text-2xl mb-3 md:mb-10 capitalize">The Right Headphones</h3>
                {/* <div className=""> */}
                <p className="font-medium text-base mb-4 md:mb-10 drop-shadow-2xl text-gray-600">
                    In ornare quam viverra orci sagittis. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus. Arcu felis bibendum ut tristique et.
                </p>
                {/* </div> */}
    
                <a href="https://www.youtube.com/watch?v=RZor4t83b6Q" className="inline-block play-vedio text-white opacity-75">
                    {/* <img src="assets/images/icon/play.webp" alt="play image" loading="lazy" width="50" height="50" /> */}
                    <AiOutlinePlayCircle className="text-4xl md:text-8xl transition-all"/>
                </a>
            </div>
        </div>
        </FadeUp>

    )
}

export default VideoBanner;

// src="/images/photos/falkland/Falkland1.jpeg"