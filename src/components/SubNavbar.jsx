import React, { useState } from 'react'

function SubNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdown = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <div className='flex peer justify-between px-3 gap-3 items-center bg-gray-200 py-1'>
            <div className='py-2 flex justify-between items-center border rounded-md border-gray-700 px-3' onClick={handleDropdown}>
                <span className='text-lg'>Dropdown</span>
                {
                    isOpen
                        ? <i className='bx bx-chevron-down text-2xl' ></i>
                        : <i className='bx bx-chevron-up text-2xl' ></i>
                }
            </div>
            <div className='relative flex justify-between items-center w-full peer-focus:w-80 sm:peer-focus:w-full'>
                <input type="search" placeholder='Search' className='pl-3 py-3 w-full rounded-xl outline-none font-medium' id='search' name='search' />
                <i className='bx bx-search-alt-2 text-2xl py-2 px-2 rounded-r-xl absolute right-0 bg-blue-500 text-white' ></i>
            </div>
            <div className='py-6 w-20 border border-gray-950'>

            </div>
        </div>
    )
}

export default SubNavbar