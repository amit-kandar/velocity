import React, { useState } from 'react'

function SubNavbar() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [input, setInput] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCategoryDropdown = () => {
        setIsCategoryOpen(prev => !prev)
    }

    const handleCountryDropdown = () => {
        setIsCountryOpen(prev => !prev);
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };


    const marketplaceCategories = [
        'Electronics',
        'Clothing',
        'Home',
        'Books',
        'Health',
        'Toys',
        'Sports',
        'Automotive',
        'Art',
        'Crafts',
        'Food',
        'Pet Supplies',
        'Electronics',
        'Furniture',
        'Music',
        'Services',
        'Digital Products',
        'Antiques',
        'Jewelry',
        'Real Estate',
        'Travel',
    ];
    const countryNames = [
        'United States',
        'United Kingdom',
        'Canada',
        'Germany',
        'France',
        'Australia',
        'Japan',
        'China',
        'India',
        'Brazil',
    ];


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input);
    }

    return (
        <div className='flex justify-between items-center gap-3 flex-col md:flex-row px-3 bg-gray-200 py-1'>
            <div className='relative flex justify-between items-center w-full grow'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <input type="search" placeholder='Search' className='pl-3 py-3 w-full rounded-xl outline-none font-medium' id='search' name='search' value={input} onChange={(e) => { setInput(e.target.value) }} />
                    <button type='submit' className='py-2 px-2 rounded-r-xl absolute right-0 bg-blue-500'>
                        <i className='bx bx-search-alt-2 text-2xl text-white' ></i>
                    </button>
                </form>
            </div>
            <div className='flex justify-between flex-row gap-3 w-full md:w-1/2 lg:w-1/3 grow-0'>
                <div className='relative py-2 flex justify-between items-center border rounded-md border-gray-700 px-3 w-36' onClick={handleCategoryDropdown}>
                    <span className='text-base'>{selectedCategory || 'Dropdown'}</span>
                    {
                        isCategoryOpen
                            ? <i className='bx bx-chevron-down text-2xl' ></i>
                            : <i className='bx bx-chevron-up text-2xl' ></i>
                    }
                    {
                        isCategoryOpen &&
                        <div className={`${isCategoryOpen ? "block" : "hidden"} absolute w-auto h-80 overflow-scroll top-14 left-0 bg-white z-50 p-3`}>
                            {
                                marketplaceCategories.map((item, index) => {
                                    return (
                                        <div key={index} className='text-base font-medium font-roboto' onClick={() => handleCategorySelect(item)}>{item}</div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className='relative py-2 flex justify-between items-center border rounded-md border-gray-700 px-2 w-40' onClick={handleCountryDropdown}>
                    <span className='text-base'>{selectedCountry || 'Select Country'}</span>
                    {
                        isCountryOpen
                            ? <i className='bx bx-chevron-down text-2xl' ></i>
                            : <i className='bx bx-chevron-up text-2xl' ></i>
                    }
                    {
                        isCountryOpen &&
                        <div className={`${isCountryOpen ? "block" : "hidden"} absolute w-auto h-auto overflow-scroll top-14 left-0 bg-white z-50 p-3`}>
                            {
                                countryNames.map((item, index) => {
                                    return (
                                        <div key={index} className='text-base font-medium font-roboto' onClick={() => handleCountrySelect(item)}>{item}</div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SubNavbar