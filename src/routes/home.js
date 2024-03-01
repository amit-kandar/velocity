import React from 'react'
import Hero from '../components/Hero'
import Campaign from '../components/Campaign'

function home() {
    return (
        <div className='bg-gray-100 px-5 py-5'>
            <Hero />
            <Campaign />
        </div>
    )
}

export default home