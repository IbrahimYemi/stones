import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function ShowBlog() {
    const { show } = useSelector((state) => state.show);

    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    return (
        <>
            <Navbar title={`Blog page: title`} />
            <div className="lg:pt-12 pt-6 w-full mx-auto px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8">
                    <div className="relative flex flex-col px-4 py-5 flex-auto my-8">
                        <Link to='/blog/posts' className="text-end rounded px-3 hover:bg-yellow-700 cursor-pointer py-1 flex items-center shadow-md bg-green-700 text-white absolute top-7 right-4" >
                            All Blogs {''}. <i className="fa-solid fa-arrows-rotate"></i>
                        </Link>
                        <h6 className="text-6xl text-center mt-8 text-green-700 font-bold">{show.title}</h6>
                        <br />
                        <span className="text-gray-700">
                            By <span className="font-bold italic text-gray-800">
                                {show.writter_name}
                            </span>, Created on {formatter.format(Date.parse(show.updated_at))}
                        </span>
                        <small className="mt-8 font-bold text-yellow-800">Contact writter on <a className="italic" href="tel:+234{{$post->social_link}}">
                            +234{show.social_link}
                        </a> </small>
                        <div className=" p-3 rounded-full">
                            <img className='w-2/5 m-auto my-8' src={show.image_path_api} alt={show.title} />
                        </div>
                        <div className="text-left h-auto py-9 px-4" >
                            <p className="mt-6 mb-4 text-Gray-400 text-lg">
                                {show.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
