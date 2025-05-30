import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { IoIosCart } from 'react-icons/io';
import { MdCompareArrows } from 'react-icons/md';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    const [brands, setBrand] = useState([]);
    useEffect(() => {
        fetch('Brand.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (
        <div className=' py-2'>
            <div className="drawer w-11/12 lg:w-9/12 mx-auto ffamily">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="navbar flex items-center w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="hover:cursor-pointer hover:text-[#D92037]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>

                        <div className=" relative -z-1 flex items-center justify-between w-full">
                            <div className="flex justify-center items-center ml-1">
                                <GiCarWheel className='text-4xl text-[#D92037]'></GiCarWheel>
                                <h1 className='text-3xl font-semibold'>AutoGear</h1>
                            </div>
                            <div className="hidden lg:block">
                                <Paper
                                    className=''
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search Product"
                                        inputProps={{ 'aria-label': 'search product' }}
                                    />
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <div className="indicator">
                                    <FaRegUser className="text-gray-700 text-2xl" />
                                </div>
                                <div className="">
                                    <div className="indicator">
                                        <span className="indicator-item bg-[#D92037] text-white rounded-full px-2 text-xs">0</span>
                                        <MdCompareArrows className="text-gray-700 text-2xl" />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="indicator">
                                        <span className="indicator-item bg-[#D92037] text-white rounded-full px-2 text-xs">0</span>
                                        <FaRegHeart className="text-gray-700 text-2xl" />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="indicator">
                                        <span className="indicator-item bg-[#D92037] text-white rounded-full px-2 text-xs">0</span>
                                        <IoIosCart className="text-gray-700 text-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-2">
                        <li className='text-2xl font-semibold border-b border-gray-300 pb-3'>Menu</li>
                        <li>
                            <details>
                                <summary className='p-0 hover:bg-transparent rounded-none mt-4 hover:text-[#EE233C]'>Autoparts</summary>
                                <ul class="p-2">
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                <div className="flex justify-start items-center">
                                                    <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                    <p>Alternator</p>
                                                </div>
                                            </summary>
                                            <ul class="">
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Brakers & Rotors</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Wheels Adapters</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Headlights</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Steering Wheels</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                <div className="flex justify-start items-center">
                                                    <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                    <p>Custom Grilles</p>
                                                </div>
                                            </summary>
                                            <ul class="">
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Speakers</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Lubricants</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Coil Spring</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Service Tools</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                <div className="flex justify-start items-center">
                                                    <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                    <p>Screw Clamps</p>
                                                </div>
                                            </summary>
                                            <ul class="">
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Car Jack</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Engine Fan</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>A/C Compressor</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                        <div className="flex justify-start items-center">
                                                            <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                            <p>Fuel Injector</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li className='hover:text-[#EE233C]'>Radiator</li>
                        <li className='hover:text-[#EE233C]'>Today's Deal</li>
                        <li>
                            <details>
                                <summary className='hover:text-[#EE233C] p-0 hover:bg-transparent rounded-none'>All Brands</summary>
                                <ul class="p-2">
                                    <li>
                                        {
                                            brands.map(brand => (
                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                    <div className="flex justify-start items-center">
                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                        <p>{brand.name}</p>
                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li className='hover:text-[#EE233C]'>About Us</li>
                        <li className='hover:text-[#EE233C]'>Contact Us</li>
                        <li className='hover:text-[#EE233C]'>Blog</li>
                    </ul>
                </div>
            </div>
            <div className="w-11/12 mx-auto lg:hidden">
                <Paper
                    className=''
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'full' }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">

                        <div className="drawer items-center">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content items-center">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="drawer-button items-center"><MenuIcon className='-mt-2' /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-black text-start min-h-full w-80 p-4 gap-2">
                                    <li className='text-2xl font-semibold border-b border-gray-300 pb-3'>Category</li>
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent rounded-none mt-4 hover:text-[#EE233C]'>Autoparts</summary>
                                            <ul class="p-2">
                                                <li>
                                                    <details>
                                                        <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                            <div className="flex justify-start items-center">
                                                                <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                <p>Alternator</p>
                                                            </div>
                                                        </summary>
                                                        <ul class="">
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Brakers & Rotors</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Wheels Adapters</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Headlights</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Steering Wheels</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                            <div className="flex justify-start items-center">
                                                                <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                <p>Custom Grilles</p>
                                                            </div>
                                                        </summary>
                                                        <ul class="">
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Speakers</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Lubricants</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Coil Spring</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Service Tools</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                            <div className="flex justify-start items-center">
                                                                <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                <p>Screw Clamps</p>
                                                            </div>
                                                        </summary>
                                                        <ul class="">
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Car Jack</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Engine Fan</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>A/C Compressor</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Fuel Injector</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='hover:text-[#EE233C]'>Radiator</li>
                                    <li className='hover:text-[#EE233C]'>Suspension</li>
                                    <li className='hover:text-[#EE233C]'>Muffler</li>
                                    <li className='hover:text-[#EE233C]'>Front Axle</li>
                                    <li className='hover:text-[#EE233C]'>Engine</li>
                                    <li className='hover:text-[#EE233C]'>Featured</li>
                                    <li className='hover:text-[#EE233C]'>ABS Breaks</li>
                                    <li className='hover:text-[#EE233C]'>Accessories supplier</li>
                                    <li className='hover:text-[#EE233C]'>Fashion supplier</li>
                                </ul>
                            </div>
                        </div>
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Product"
                        inputProps={{ 'aria-label': 'search product' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className="hidden lg:block mt-4 shadow">
                <div className="flex items-center gap-20 w-8/12 mx-auto">
                    <div className="">
                        <div className="drawer">
                            <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer2" className="bg-[#D92037] text-white px-10 py-3 text-xl rounded-t-lg">All Category</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-2">
                                    <li className='text-2xl font-semibold border-b border-gray-300 pb-3'>Category</li>
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent rounded-none mt-4 hover:text-[#EE233C]'>Autoparts</summary>
                                            <ul class="p-2">
                                                <li>
                                                    <details>
                                                        <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                            <div className="flex justify-start items-center">
                                                                <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                <p>Alternator</p>
                                                            </div>
                                                        </summary>
                                                        <ul class="">
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Brakers & Rotors</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Wheels Adapters</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Headlights</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Steering Wheels</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                            <div className="flex justify-start items-center">
                                                                <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                <p>Custom Grilles</p>
                                                            </div>
                                                        </summary>
                                                        <ul class="">
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Speakers</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Lubricants</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Coil Spring</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Service Tools</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary className='p-0 hover:bg-transparent rounded-none hover:text-[#EE233C]'>
                                                            <div className="flex justify-start items-center">
                                                                <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                <p>Screw Clamps</p>
                                                            </div>
                                                        </summary>
                                                        <ul class="">
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Car Jack</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Engine Fan</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>A/C Compressor</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>
                                                                    <div className="flex justify-start items-center">
                                                                        <RiArrowDropRightLine className='text-3xl'></RiArrowDropRightLine>
                                                                        <p>Fuel Injector</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='hover:text-[#EE233C]'>Radiator</li>
                                    <li className='hover:text-[#EE233C]'>Suspension</li>
                                    <li className='hover:text-[#EE233C]'>Muffler</li>
                                    <li className='hover:text-[#EE233C]'>Front Axle</li>
                                    <li className='hover:text-[#EE233C]'>Engine</li>
                                    <li className='hover:text-[#EE233C]'>Featured</li>
                                    <li className='hover:text-[#EE233C]'>ABS Breaks</li>
                                    <li className='hover:text-[#EE233C]'>Accessories supplier</li>
                                    <li className='hover:text-[#EE233C]'>Fashion supplier</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-15 font-semibold">
                        <p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="py-3">Autoparts</div>
                                <div className="dropdown-content menu bg-base-100 rounded-box z-1 w-130 p-5 shadow-sm">
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col gap-2.5">
                                                <h4 className='font-semibold border-b border-gray-200 pb-2 text-black hover:text-[#EE233C]'>Alternator</h4>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Brakers & Rotors</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Wheels Adapters</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Headlights</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Steering Wheels</p>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <h4 className='font-semibold border-b border-gray-200 pb-2 text-black hover:text-[#EE233C]'>Custom Grilles</h4>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Speakers</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Lubricants</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Coil Spring</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Service Tools</p>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <h4 className='font-semibold border-b border-gray-200 pb-2 text-black hover:text-[#EE233C]'>Screw Clamps</h4>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Car Jack</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Engine Fan</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>A/C Compressor</p>
                                                <p className=' text-gray-500 hover:text-[#EE233C]'>Fuel Injector</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <img src="/src/assets/img/auto.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className=""></div>
                                </div>
                            </div>
                        </p>
                        <p className='py-3'>Radiator</p>
                        <p className='py-3'>Today's Deal</p>
                        <p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="py-3">All Brands</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        {
                                            brands.map(brand => (
                                                <a className='bg-transparent text-black hover:text-[#EE233C]'>{brand.name}</a>
                                            ))
                                        }
                                    </li>
                                </ul>
                            </div>
                        </p>
                        <p className='py-3'>About Us</p>
                        <p className='py-3'>Contact Us</p>
                        <p className='py-3'>Blog</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;