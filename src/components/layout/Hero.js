import Image from 'next/image'
import React from 'react'
import RightChevron from '../icons/RightChevron'
import LearnMore from '../icons/LearnMore'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='py-12'>
            <h1 className='text-4xl font-semibold'> 
                Everything <br /> is better <br /> with <span className='text-primary'> Pizza</span> 
            </h1>
            <p className='my-6 text-sm text-gray-500'> 
                Pizza is the missing piece that makes every 
                day complete, a simple yet delicious joy in 
                life 
            </p>
            <div className='flex gap-4'>
                <button className='bg-primary text-white flex gap-2 px-4 py-2 rounded-full'>
                    ORDER NOW
                    <RightChevron />
                </button>
                <button className='flex gap-2 py-2 text-gray-500 font-semibold'>
                    Learn more
                    <LearnMore />
                </button>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/images/pizza.png'} layout={'fill'} objectFit={'contain'} alt='pizza image' />
        </div>
    </section>
  )
}

export default Hero