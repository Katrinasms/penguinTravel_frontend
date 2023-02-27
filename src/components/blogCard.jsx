const BlogCard =({image, title, link, content,date}) => {

return (

<div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group  h-[28rem] xl:h-[32rem]">
<div className="mb-6">
    <a href={link} className="overflow-hidden block ">
        <img className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full" src={image} alt="blog image" width="300" height="200" />
    </a>
</div>

<h3><a href={link} className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px] text-ellipsis overflow-hidden">{title}</a></h3>
<div className="blog-meta">
    <ul className="flex flex-wrap items-center pb-[10px]">
        <li className="text-sm"><a href={link} className="text-sm text-dark hover:text-orange transition-all">{date}</a> <span className="inline-block mx-2">\</span> </li>
        {/* <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">0 comments</a></li> */}
    </ul>
</div>

<p className="font-normal text-black text-sm mb-[25px]">{content}</p>
{/* <a className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]" href="blog-details.html">blog details</a> */}
</div>
)
}

// 

export default BlogCard;