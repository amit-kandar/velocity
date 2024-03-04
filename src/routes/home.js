import React from 'react'
import Hero from '../components/Hero'
import Campaign from '../components/Campaign'
import SellProduct from '../components/SellProduct'
import SellBanner from '../components/SellBanner'

function home() {
    return (
        <div className='bg-gray-100 px-5 py-5'>
            <Hero />
            <Campaign />
            <SellProduct />
            <SellBanner />
        </div>
    )
}

export default home