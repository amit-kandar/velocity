import React from 'react'

function Campaign() {
    return (
        <div className='mt-5 p-5 bg-white rounded-2xl'>
            <div className=''>
                <img src="https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="campaign" className='h-32 w-full rounded-2xl' />
            </div>
            <div className='w-full flex justify-center items-center flex-col gap-5 mt-5 md:flex-row'>
                <div className='w-full h-80'>
                    <img src="https://images.unsplash.com/photo-1708973908941-e043bdee8a88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="campaign" className='w-full rounded-2xl h-full' />
                </div>
                <div className='w-full flex gap-5 overflow-x-auto'>
                    <div className='max-w-72 min-w-64 h-60 rounded-xl'>
                        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="product" className='h-full w-full rounded-xl' />
                    </div><div className='max-w-72 min-w-64 h-60 rounded-xl'>
                        <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="product" className='h-full w-full rounded-xl' />
                    </div><div className='max-w-72 min-w-64 h-60 rounded-xl'>
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="product" className='h-full w-full rounded-xl' />
                    </div><div className='max-w-72 min-w-64 h-60 rounded-xl'>
                        <img src="https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="product" className='h-full w-full rounded-xl' />
                    </div>
                    <div className='max-w-72 min-w-64 h-60 rounded-xl'>
                        <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="product" className='h-full w-full rounded-xl' />
                    </div>
                </div>
                <div className='w-full h-80'>
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="campaign" className='w-full rounded-2xl h-full' />
                </div>
            </div>
        </div>
    )
}

export default Campaign