import React from 'react';
import { Link } from 'react-router-dom';

const UpNav = () => {
    return (
        <div>
            <div className="shadow  border-t-7 border-[#EE233C] ffamily">
                <div className="">
                    <div className="flex lg:justify-between justify-center items-center w-9/12 mx-auto py-0.5">
                        <div className="hidden lg:block">
                            <p className='text-sm text-gray-500'>Limited-Time Offers : Mid-Summer Season Sale On Selected Items - <Link className='text-[#EE233C] hover:underline' to={"/product"}>Shop Now</Link></p>
                        </div>
                        <div className="flex lg:justify-end justify-center items-center text-gray-500">
                            <div className="hidden lg:block">
                                <ul className='menu menu-horizontal'>
                                    <li className='px-3 border-r border-gray-400'>Help Center</li>
                                    <li className='px-3 border-r border-gray-400'>Order Tracking</li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className='menu menu-horizontal'>
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent pr-3 border-r border-gray-400 rounded-none'>
                                                <div className="flex items-center gap-1">
                                                    <img src="/src/Components/UpNav/Flag/1.jpg" alt="EN" />
                                                    <p>EN</p>
                                                </div>
                                            </summary>
                                            <ul class="p-2 w-45 text-black">
                                                <li>
                                                    <a>
                                                        <div className="flex items-center gap-3 hover:text-[#EE233C]">
                                                            <img src="/src/Components/UpNav/Flag/1.jpg" alt="EN" />
                                                            <p>ENGLISH</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div className="flex items-center gap-3 hover:text-[#EE233C]">
                                                            <img src="/src/Components/UpNav/Flag/2.jpg" alt="EN" />
                                                            <p>Français</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div className="flex items-center gap-3 hover:text-[#EE233C]">
                                                            <img src="/src/Components/UpNav/Flag/3.jpg" alt="EN" />
                                                            <p>Español</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div className="flex items-center gap-3 hover:text-[#EE233C]">
                                                            <img src="/src/Components/UpNav/Flag/4.jpg" alt="EN" />
                                                            <p>Deutsch</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div className="flex items-center gap-3 hover:text-[#EE233C]">
                                                            <img src="/src/Components/UpNav/Flag/5.jpg" alt="EN" />
                                                            <p>Italiano</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <div className="flex items-center gap-3 hover:text-[#EE233C]">
                                                            <img src="/src/Components/UpNav/Flag/6.jpg" alt="EN" />
                                                            <p>Polski</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary className='p-0 hover:bg-transparent pl-3 rounded-none'>USD</summary>
                                            <ul class="p-2 w-30">
                                                <li><a className='bg-transparent text-black hover:text-[#EE233C]'>USD</a></li>
                                                <li><a className='bg-transparent text-black hover:text-[#EE233C]'>EUR</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNav;