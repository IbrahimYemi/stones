import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function About() {
    return (
        <>
            <Navbar title={"About page"} />
            <div className="my-5" >
                <section className="pt-20 pb-20">
                    <div className='container flex flex-col mx-auto px-4' >
                        <h1 className='mx-auto text-5xl font-bold text-yellow-700' > About Us </h1>
                        <div className="flex flex-wrap justify-center text-center mb-15">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold my-4">Get To Know Us! Who are we?</h2>
                                <p className="text-lg leading-relaxed mt-5 text-blueGray-500">
                                    Stones Empire Nigeria Limited is a leading player in the mining and exploration industry, with
                                    a proven track record of successful projects around the world. Our team of experts
                                    is dedicated to responsible resource extraction, maximizing value for our clients
                                    and minimizing our impact on the environment. We use cutting-edge technologies and
                                    techniques to explore and extract a wide range of natural resources, including
                                    [list of specific resources]. Whether you're a mining company looking for a reliable partner
                                    or an individual with mineral rights looking to make the most of your assets, we can help.
                                    Contact us today and discover the potential of the earth with Stones Empire Nigeria Limited.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-wrap' >
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-yellow-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-700">
                                            <i className="fa-solid fa-house-user"></i>
                                        </div>
                                        <h6 className="text-2xl text-green-700 font-bold">Our Heritage</h6>
                                        <p className="mt-2 mb-4 text-white">
                                            Our mission is to create an economy of oppurtunities. Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cum quaerat maiores assumenda in placeat consequatur
                                            esse explicabo dignissimos laboriosam ut. Quisquam veritatis maxime facere sequi nobis alias rerum.
                                            Veritatis omnis vel laborum magni assumenda fuga ipsum quam voluptatum doloribus iure?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-green-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                                            <i className="fa-solid fa-flag"></i>
                                        </div>
                                        <h6 className="text-2xl text-yellow-700 font-bold">Our Mission</h6>
                                        <p className="mt-2 mb-4 text-white">
                                            Our mission is to create an economy of oppurtunities. Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cum quaerat maiores assumenda in placeat consequatur
                                            esse explicabo dignissimos laboriosam ut. Quisquam veritatis maxime facere sequi nobis alias rerum.
                                            Veritatis omnis vel laborum magni assumenda fuga ipsum quam voluptatum doloribus iure?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-yellow-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-700">
                                            <i className="fa-solid fa-eye"></i>
                                        </div>
                                        <h6 className="text-2xl text-green-700 font-bold">Our Vission</h6>
                                        <p className="mt-2 mb-4 text-white">
                                            Our vission is to create an economy of oppurtunities. Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cum quaerat maiores assumenda in placeat consequatur
                                            esse explicabo dignissimos laboriosam ut. Quisquam veritatis maxime facere sequi nobis alias rerum.
                                            Veritatis omnis vel laborum magni assumenda fuga ipsum quam voluptatum doloribus iure?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
