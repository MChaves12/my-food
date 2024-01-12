import React from 'react'
import MenuItem from '../menu/MenuItem'

const HomeMenu = () => {
  return (
    <section>
        <div className='text-center'>
            <h3 className='text-gray-600 font-semibold uppercase leading-4'> 
                Check out 
            </h3>
            <h2 className='text-primary font-bold text-4xl italic'> 
                Menu 
            </h2>
        </div>
        <div className='grid grid-cols-3 gap-4 my-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </section>
  )
}

export default HomeMenu