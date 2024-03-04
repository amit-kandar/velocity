import React from 'react'

function SellBanner() {
    return (
        <div className='mt-5 p-5 bg-white rounded-2xl'>
            <div className='mt-5 grid place-items-center gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div className='w-full h-40 bg-gray-400 rounded-md'></div>
                <div className='w-full h-40 bg-gray-400 rounded-md'></div>
                <div className='w-full h-40 bg-gray-400 rounded-md'></div>
            </div>
        </div>
    )
}

export default SellBanner