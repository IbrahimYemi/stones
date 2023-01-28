import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Contact() {
    return (
        <>
            <Navbar title={"Contact page"} />
            <div className="my-5" >
                <section className="pt-20 pb-48">
                    <div className="container flex flex-col mx-auto px-4">
                        <h1 className='mx-auto text-5xl font-bold text-yellow-700 my-5' > Contact Us </h1>
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">Meet our team of experts</h2>
                                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                    Meet the skilled and experienced team behind our operations,
                                    dedicated to driving progress and prosperity through responsible resource extraction.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-1-800x800.jpg").default}
                                        src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
                                        className="shadow-lg rounded mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            GEO SCIENTIST
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-phone"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-1-800x800.jpg").default}
                                        src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
                                        className="shadow-lg rounded mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            CIVIL ENGINEER
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-phone"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-1-800x800.jpg").default}
                                        src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
                                        className="shadow-lg rounded mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            GEOLOGIST
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-phone"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-1-800x800.jpg").default}
                                        src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
                                        className="shadow-lg rounded mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            BIOLOGIST
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-phone"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-blueGray-800">
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
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Have a Project?
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                    Don't hesitate to reach out - our team is always available to answer your questions
                                    and help you take the next step in partnering Stones Empire Nigeria Limited.
                                    Contact us today and discover the potential of the earth with us.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Excelent Services
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Contact us today and get a satisfied service that is worthy of your effort and time!
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Qualified Personel
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Get in touch with us and experience the touch of experties!
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Ontime Delivery
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    We work on maintained schedule which allows us to maintain a stabel work force and deliver excellently!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Want to work with us?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                            Complete this form and we will get back to you in 24
                                            hours.
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Full Name"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                cols="80"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Send Message
                                            </button>
                                        </div>
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
