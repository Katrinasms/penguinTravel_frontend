import VideoCard from "../components/videoCard"
import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"


const video_data = [
    {title: "[南極企鵝之旅]12分鐘睇完22日Falkland Island, South Georgia & 南極三島之旅| 22 days to Antarctica", image: "./images/photos/video/Cover1.jpg", link:"https://www.youtube.com/watch?v=RZor4t83b6Q"},
    {title: "22 min Relaxing Music with Penguins (South Georgia & Antarctica)  Part 1", image: "./images/photos/video/Cover2.jpeg", link:"https://www.youtube.com/watch?v=JaaAjn-0YT0&t=1109s"},
    {title: "[阿根廷睇世界杯]7分鐘睇完世界盃月間既阿根廷 | 7 Min about World Cup Period in Argentina", image: "./images/photos/video/Cover3.png", link:"https://www.youtube.com/watch?v=FB7_XU75il4"},
]


const VideoPage = () => {
    window.scrollTo(0, 0);
    return(
        <>
            <div className=" m-0 ">
                <div className="hero-video-image">
                    <div className=" slider-content hero-shop-text font-semibold rounded">
                        <hr className="" />
                        <h1 className="text-4xl font-extrabold">Video and Blog</h1>
                        <p>Recorded my travel in Youtube</p>
                    </div>
                </div>
            </div>
            <div className="py-24">
                <div className="container">
                    <div className="flex flex-wrap -my-4 -px-4">
                            {
                                video_data?.map((data,i)=>(
                                    <div key={i}  className="w-full px-4 my-4">
                                    <FadeUp>
                                        <VideoCard image={data.image} title={data.title} link={data.link}/>
                                    </FadeUp>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
    
    
    }
    
    export default VideoPage