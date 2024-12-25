import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {
    useEffect(() => {
      console.log(gameBanner)
    }, [])
    
  return (
    <div className='relative mt-5'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[24px] font-bold text-white'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white p-1 px-2'>Get Nov</button>
        </div>
      <img src={gameBanner.image_background}
      className='md:h-[320px] w-full object-cover rounded-xl' alt="" />
    </div>
  )
}

export default Banner
