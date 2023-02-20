const VideoCard =({image, title, link}) => {
    return (
        <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group flex flex-wrap items-center">
            <div className="mb-6 lg:mb-0 lg:mr-8 w-full lg:w-1/2 xl:w-1/2">
                <a href={link} className="overflow-hidden block">
                    <img className="transform group-hover:scale-110 transition-transform duration-500 w-full" loading="lazy" width="600" height="400" src={image} alt="blog image" />
                </a>
            </div>

            <div className="flex-1">
                <h3><a href={link} className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px] leading-[1.3]">{title}</a></h3>
                <div className="blog-meta flex">
                    <ul className="flex flex-wrap mb-[10px] mx-auto">
                        <li className="text-sm"><a href={link} className="text-sm text-dark hover:text-orange transition-all">21 April, 2021</a> <span className="inline-block mx-2">\</span> </li>
                        <li className="text-sm"><a href={link} className="text-sm text-dark hover:text-orange transition-all">0 comments</a></li>
                    </ul>
                </div>

                <p className="font-normal text-black text-sm mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
            </div>
        </div>
    )
}

export default VideoCard;