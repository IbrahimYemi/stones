import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from "react-router-dom";
import axios from 'axios';
import { setPosts } from '../Store/posts';
import { useDispatch, useSelector } from 'react-redux';
import { setShowPosts } from '../Store/show';
import LoadingComponent from '../Components/Loading';

export default function Blog() {
    const [isLoading, setIsLoading] = useState(true)
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    const showFunction = (object) => {
        dispatch(setShowPosts(object))
    }


    useEffect(() => {
        async function fetchData() {
            const http = axios.create({
                baseURL: 'http://127.0.0.1:8000'
            });
            try {
                await http.get('/api/posts/all')
                    .then((res) => {
                        dispatch(setPosts(res.data));
                    }
                    );
                setIsLoading(false)
            } catch (e) {
                console.error(e);
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <Navbar title={"Blog page"} />
            <section className="pb-20 pt-24 border-b bg-gray-200 ">
                <div className='container flex flex-col mx-auto px-4 ' >
                    <div className='flex flex-col' >
                        <h1 className='mx-auto my-4 text-5xl font-bold text-yellow-700' > Blog Posts </h1>
                        {isLoading ? <LoadingComponent /> :
                            posts.map((post, i) => {
                                return (
                                    <div key={i} className="sm:grid grid-cols-2 gap-20 w-4/5 my-8 mx-auto py-15  border-b border-gray-200 ">
                                        <div className="h-72" >
                                            <img src={post.image_path_api} className="h-64 w-full" alt={post.title} />
                                        </div>
                                        <div>
                                            <h2 className="text-gray-700 font-bold text-5xl pb-4 ">
                                                {post.title}
                                            </h2>
                                            <span className="text-gray-700">
                                                By <span className="font-bold italic text-gray-800">
                                                    {post.writter_name}
                                                </span>, Created on {formatter.format(Date.parse(post.updated_at))}
                                            </span>
                                            <br />
                                            <small className="mt-8 font-bold text-yellow-800">Contact me on <a className="italic" href="tel:+234{{$post->social_link}}">
                                                +234{post.social_link}
                                            </a> </small>
                                            <p className="text-xl pt-8 pb-10 text-gray-700 leading-8 font-light ">
                                                {post.body.slice(0, 125) + '...'}
                                            </p>
                                            <Link to='/blog/posts/show'
                                                onClick={() => showFunction(post)}
                                                className="uppercase hover:bg-green-700 bg-green-500 text-gray-100 text-sm font-extrabold py-3 px-8 rounded-3xl "
                                            >
                                                Keep Reading
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
