"use client"
import { useState } from "react";
import NavData from "../../../NavData";
import Nav from "./Nav";
import NavSm from "./NavSmallScreen";

const Header = () => {


    const [showMenu, setShowMenu] = useState(true)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <section className="bg-white">
            <nav className="border-b-2 shadow-md">
                <div className="mx-auto max-w-7xl text-md p-2 md:px-6 lg:px-8">
                    <div className="relative flex h-14 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <div className="absolute top-0 left-0 md:relative md:flex md:flex-shrink-0 md:items-center">
                                <img className="h-12" src="logo.png" alt="company-logo" />
                            </div>
                            <div className="hidden md:ml-6 md:my-auto md:block">
                                <div className="flex space-x-4 md:flex-shrink">
                                    {
                                        NavData.map((element, index) => {
                                            return (
                                                <Nav key={index} props={element} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="hidden md:flex md:flex-row md:flex-grow">
                                <form className="relative h-12 flex  m-2">
                                    <input
                                        placeholder='Search for anything'
                                        className='w-full h-full rounded-md pl-3 pr-2 py-2 focus:outline-none bg-[#f5f5f5]'
                                    />
                                    <button type='submit' className='absolute right-0 top-0 h-full px-3 rounded-md  flex items-center justify-center'>
                                        <svg width="20" height="20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                        </svg>
                                    </button>
                                </form>
                                <button className="animatedButton bg-[#ff5d22] m-2 px-5 py-3">
                                    <span></span>
                                    <a className="text-white">
                                        <i className="fa-solid fa-arrow-right px-2"></i>
                                        Get Started
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center p-1 text-[#ff5d22] bg-red-100" aria-controls="mobile-menu" aria-expanded="false" onClick={handleClick}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className={`block h-10 w-10 ${showMenu ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className={`block h-10 w-10 ${!showMenu ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {
                            !showMenu && NavData.map((element, index) => {
                                return (
                                    <NavSm key={index} props={element} />
                                )
                            })
                        }
                        {!showMenu &&
                            <div className="flex flex-row text-md  overflow-hidden">
                                <form className="relative flex m-2 w-3/5">
                                    <input
                                        placeholder='Search for anything'
                                        className='rounded-md w-full p-2 py-3 focus:outline-none bg-[#f5f5f5]'
                                    />
                                    <button type='submit' className='absolute right-0 top-0 h-full px-3 rounded-md  flex items-center justify-center'>
                                        <svg width="20" height="20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                        </svg>
                                    </button>
                                </form>
                                <button className="animatedButton bg-[#ff5d22] m-2 w-2/5 py-3">
                                    <span></span>
                                    <a className="text-white">
                                        <i className="fa-solid fa-arrow-right px-2"></i>
                                        Get Started
                                    </a>
                                </button>
                            </div>
                        }

                    </div>
                </div>
            </nav >
        </section >
    )
}

export default Header