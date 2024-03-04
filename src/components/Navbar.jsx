import React, { useState } from 'react';
import { LOGO } from '../constants'


const countryCodes = [
    'US',
    'CA',
    'GB',
    'AU',
    'DE',
    'FR',
    'JP',
    'IN',
    'BR',
    'MX',
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null)

    const handleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    }

    const handleSelectCountry = (country) => {
        setSelectedCountry(country)
    }

    const profileImage = false
    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <nav className='bg-gray-100 relative w-full h-16 flex justify-between px-8 lg:px-12 xl:px-20 items-center'>
            <div className='w-12 h-14 rounded-full'>
                <img src={LOGO} alt="logo" className='w-full h-full rounded-full' />
            </div>
            <div className='hidden lg:flex justify-evenly items-center gap-8'>
                <div className='relative text-black text-2xl cursor-pointer border border-gray-500 rounded-full px-2 flex justify-center items-center' onClick={handleDropdown}>
                    {
                        selectedCountry === null
                            ? <i className='bx bx-globe text-base' ></i>
                            : <span className='text-base font-medium'>{selectedCountry}</span>
                    }
                    {
                        isDropdownOpen
                            ? <i className='bx bx-chevron-down text-2xl' ></i>
                            : <i className='bx bx-chevron-up text-2xl' ></i>
                    }
                    {
                        isDropdownOpen &&
                        <div className={`${isDropdownOpen ? "block" : "hidden"} absolute w-auto h-auto  top-14 left-0 bg-white z-50 p-3`}>
                            {
                                countryCodes.map((item, index) => {
                                    return (
                                        <div key={index} className='pr-5 text-sm font-medium font-roboto hover:bg-gray-200' onClick={() => handleSelectCountry(item)}>{item}</div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className='relative text-black text-2xl cursor-pointer'>
                    <span className='absolute flex justify-center items-center top-0 right-0 text-xs text-white font-bold w-4 h-4 bg-red-500 rounded-full '>2</span>
                    <i className='bx bxs-bell'></i>
                </div>
                <div className='relative text-black text-2xl cursor-pointer'>
                    <i className='bx bx-heart' ></i>
                    <span className='absolute flex justify-center items-center top-0 right-0 text-xs text-white font-bold w-4 h-4 bg-red-500 rounded-full '>2</span>
                </div>
                <div className='relative text-black text-2xl cursor-pointer'>
                    <span className='absolute flex justify-center items-center top-0 right-0 text-xs text-white font-bold w-4 h-4 bg-red-500 rounded-full '>2</span>
                    <i className='bx bx-cart' ></i>
                </div>
                <div className='text-black w-8 h-8 rounded-full flex justify-center items-center'>
                    {
                        profileImage ? profileImage : <i className='bx bxs-user-circle text-4xl'></i>
                    }
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='cursor-pointer'>
                    {
                        isOpen
                            ? <i className='bx bx-x text-3xl' onClick={handleOpen}></i>
                            : <i className='bx bx-menu text-3xl' onClick={handleOpen}></i>

                    }
                </div>
                <div className={`${isOpen ? "block" : "hidden"} absolute w-full h-screen top-16 left-0 bg-[#EEE7DA] z-50`}>

                </div>
            </div>
        </nav>
    )
}

export default Navbar