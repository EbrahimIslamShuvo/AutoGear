import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <div className="ffamily">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:w-8/12 w-11/12 mx-auto mt-5">
                    <div className="w-full">
                        <div className="carousel w-full rounded-xl">
                            <div id='slide1' className="carousel-item w-full relative">
                                <div className="">
                                    <img className='' src="/src/Pages/Home/Components/Hero/image/hero1.jpg" alt="" />
                                    <div className="text-white absolute top-10 md:top-35 right-5 md:right-15 w-5/12 flex flex-col justify-start items-start gap-4 md:gap-6">
                                        <h4 className='bg-[#D92037] px-3 py-0.5 rounded-full'>WELCOME TO AutoGear</h4>
                                        <h1 className='text-4xl  font-extrabold'>Parts For All Makes And Models</h1>
                                        <p className='text-sm'>This Week Only for World Premier</p>
                                        <button className='bg-[#D92037] hover:bg-black duration-700 px-5 py-2 rounded'>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide2" className="btn btn-circle bg-transparent border-0"><FaChevronLeft className='text-white hover:text-[#D92037] text-4xl' /></a>
                                    <a href="#slide2" className="btn btn-circle bg-transparent border-0"><FaChevronRight className='text-white hover:text-[#D92037] text-4xl' /></a>
                                </div>
                            </div>
                            <div id='slide2' className="carousel-item w-full relative">
                                <div className="">
                                    <img className='' src="/src/Pages/Home/Components/Hero/image/hero2.jpg" alt="" />
                                    <div className="text-white absolute top-10 md:top-35 right-5 md:right-15 w-5/12 flex flex-col justify-start items-start gap-4 md:gap-6">
                                        <h4 className='bg-[#D92037] px-3 py-0.5 rounded-full'>WELCOME TO AutoGear</h4>
                                        <h1 className='text-4xl  font-extrabold'>Track Your Car Service Real-Time</h1>
                                        <p className='text-sm'>This Week Only for World Premier</p>
                                        <button className='bg-[#D92037] hover:bg-black duration-700 px-5 py-2 rounded'>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide1" className="btn btn-circle bg-transparent border-0"><FaChevronLeft className='text-white hover:text-[#D92037] text-4xl' /></a>
                                    <a href="#slide1" className="btn btn-circle bg-transparent border-0"><FaChevronRight className='text-white hover:text-[#D92037] text-4xl' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 justify-center items-center gap-3">
                        <div className="relative md:w-100 rounded-xl overflow-hidden group">
                            <img className=' transition duration-700 group-hover:scale-104' src="/src/Pages/Home/Components/Hero/image/poster1.jpg" alt="" />
                            <div className=" absolute top-6 md:top-7 left-37 md:left-55 flex flex-col justify-center items-start gap-1.5 md:gap-3">
                                <h4 className='bg-[#CE1E34] text-white text-[10px] md:text-base px-3 rounded-full'>Save 10% OFF</h4>
                                <h1 className='text-base md:text-2xl font-extrabold leading-4 md:leading-7'>Mack Vision Headlight</h1>
                                <a href="" className='text-sm hover:text-[#CE1E34] hover:underline'>SHOP NOW</a>
                            </div>
                        </div>
                        <div className="relative md:w-100 rounded-xl overflow-hidden group">
                            <img className=' transition duration-700 group-hover:scale-104' src="/src/Pages/Home/Components/Hero/image/poster2.jpg" alt="" />
                            <div className=" absolute top-6 md:top-7 left-5 w-6/12 md:left-5 flex flex-col justify-center items-start gap-1.5 md:gap-3">
                                <h4 className='bg-[#CE1E34] text-white text-[10px] md:text-base px-3 rounded-full'>Save 15% OFF</h4>
                                <h1 className='text-base md:text-2xl font-extrabold leading-4 md:leading-7'>Best Classic Sports Car</h1>
                                <a href="" className='text-sm hover:text-[#CE1E34] hover:underline'>SHOP NOW</a>
                            </div>
                        </div>
                        <div className="relative md:w-100 rounded-xl overflow-hidden group">
                            <img className=' transition duration-700 group-hover:scale-104' src="/src/Pages/Home/Components/Hero/image/poster3.jpg" alt="" />
                            <div className=" absolute top-6 md:top-7 left-37 md:left-55 flex flex-col justify-center items-start gap-1.5 md:gap-3">
                                <h4 className='bg-[#CE1E34] text-white text-[10px] md:text-base px-3 rounded-full'>Save 20% OFF</h4>
                                <h1 className='text-base md:text-2xl font-extrabold leading-4 md:leading-7 w-10/12 md:w-full'>Wheel Cover For Maruti</h1>
                                <a href="" className='text-sm hover:text-[#CE1E34] hover:underline'>SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;