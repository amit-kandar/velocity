import React from 'react';
import Carousel from 'nuka-carousel';

function Hero() {
    return (
        <div className=''>
            <Carousel autoplay autoplayInterval={1000} pauseOnHover wrapAround={true} slidesToScroll={1} withoutControls className='rounded-2xl'>
                <img src="https://plus.unsplash.com/premium_photo-1705091309202-5838aeedd653?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero1' className='h-60 bg-cover bg-center w-full rounded-2xl' />
                <img src="https://images.unsplash.com/photo-1708778002531-5bb1c27c4ea3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero2' className='h-60 bg-cover bg-center w-full rounded-2xl' />
                <img src="https://images.unsplash.com/photo-1708886383759-fb23c24db348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero3' className='h-60 bg-cover bg-center w-full rounded-2xl' />
                <img src="https://images.unsplash.com/photo-1708806016593-e6be239f9d83?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero4' className='h-60 bg-cover bg-center w-full rounded-2xl' />
                <img src="https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero5' className='h-60 bg-cover bg-center w-full rounded-2xl' />
            </Carousel>
        </div>
    )
}

export default Hero