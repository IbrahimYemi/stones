import React, { useState } from "react";
import axios from 'axios'
import StonesLogo from '../Assets/stoneslogo22.jpg'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// components

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { setLatestPosts } from "../Store/latest";
import { setShowPosts } from "../Store/show";
import LoadingComponent from "../Components/Loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const { latest } = useSelector((state) => state.latest);
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
                baseURL: 'http://127.0.0.1:8000/'
            });
            try {
                await http.get('/api/posts/latest')
                    .then((res) => {
                        dispatch(setLatestPosts(res.data));
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
            <Navbar transparent title={"Home page"} />
            <main className="my-5" >
                <div className="relative pt-16 pb-32 content-center items-center justify-center min-h-screen-70">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://cdn.shopify.com/s/files/1/0252/2631/3776/files/IMG_20190227_133959-1024-x-600px.jpg?v=1595591095')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto my-8">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full flex lg:w-6/12 px-4 mx-auto text-center">
                                <div className="mx-auto flex flex-col">
                                    <h1 className="text-green-700 font-semibold text-5xl w-3/4 mx-auto">
                                        Showcasing the beauty of natural resources!
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200 w-3/4 mx-auto">
                                        Unlock the full potential of the earth with us. Discover the rare and precious stones and natural resources
                                        hidden within, and let us help you extract and harness their value for a brighter future. Welcome to Stones Empire,
                                        where we turn the earth's treasures into your success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-emerald-500 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Qualified Professionals</h6>
                                        <p className="mt-2 mb-4 text-white">
                                            We paraded excellent and up to the tasks Professionals
                                            who are well certified in this field to give you the desired value
                                            and exceed yur expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-emerald-500 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-700">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Quality and Quantity</h6>
                                        <p className="mt-2 mb-4 text-white">
                                            At Stones Empire, we offer our esteem clients and customers
                                            the best quality of good available at the best available quantity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-emerald-500 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Verified and Trusted</h6>
                                        <p className="mt-2 mb-4 text-white">
                                            Our track record is synonymous with quality, technical integrity, innovation and the
                                            highest standards of health, safety and environmental compliance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Working with us is a pleasure
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    We are an Independent technical consultancy firm providing high geology, exploration,
                                    mineral resource, mining, and environmental solution to the Mining sector in Nigeria.
                                    Stones Empire Nig. Ltd.’s services encompass the entire mining life cycle, from targeting
                                    and initial assessment to turn-key exploration project management, Mineral Resource and
                                    Reserve Estimation, public reporting, Valuations, Mine optimization and Mine closure.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Our track record is synonymous with quality, technical integrity, innovation and the highest
                                    standards of health, safety and environmental compliance.
                                </p>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-yellow-600">
                                    <img
                                        alt="..."
                                        src="https://www.daysoftheyear.com/wp-content/uploads/miners-day-1.jpg"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">

                                        <h4 className="text-xl font-bold text-white">
                                            Top Notch Services
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Unlock the potential of the earth with us. Our team of mining experts is
                                            dedicated to responsible extraction and maximizing the value of natural resources.
                                            Join us in driving progress and prosperity.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto mb-3 px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src={StonesLogo}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-600">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">A Global Organization</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Welcome to Stones Empire Nigeria Limited! We are a team of dedicated professionals committed to
                                        responsible and efficient extraction of valuable resources. Partner with us and see
                                        the difference we can make for your business
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-yellow-600 mr-3">
                                                        <i className="fas fa-fingerprint"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Carefully crafted activities
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-yellow-600 mr-3">
                                                        <i className="fa-solid fa-map-pin"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Wide range of geographical coverage
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-yellow-600 mr-3">
                                                        <i className="far fa-paper-plane"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Explore with us, nature's beauty
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-20 pb-48">
                    <div className='container flex flex-col mx-auto px-4' >
                        <div className='flex flex-col' >
                            <h1 className='mx-auto text-5xl font-bold text-yellow-700' > Blog Posts </h1>
                            { isLoading ? <LoadingComponent /> : 
                                latest.map((post, i) => {
                                    return (
                                        <div key={i} className="sm:grid grid-cols-2 gap-20 w-4/5 my-8 mx-auto py-15  border-b border-gray-200 ">
                                            <div className="h-72" >
                                                <img className="h-64 w-full" src={post.image_path_api} alt={post.title} />
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
                                                    {post.body.slice(0, 105) + '...'}
                                                </p>
                                                <Link to='/blog/posts'
                                                    className="uppercase block lg:hidden w-44 my-4 bg-yellow-500 text-gray-100 text-sm font-extrabold py-3 px-8 rounded-3xl mr-4">
                                                    All Blogs {''}. <i className="fa-solid fa-arrows-rotate"></i>
                                                </Link>
                                                <Link to='/blog/posts/show'
                                                    onClick={() => showFunction(post)}
                                                    className="uppercase bg-green-500 w-44 text-gray-100 text-sm font-extrabold py-3 px-8 rounded-3xl "
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
            </main>
            <Footer />
        </>
    );
}
