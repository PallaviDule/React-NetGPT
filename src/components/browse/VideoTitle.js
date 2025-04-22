import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 text-white absolute bg-gradient-to-r from-black w-full aspect-video'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 w-1/3'>{overview}</p>
        <div className='m-2 pb-5'>
            <button className='bg-white px-4 py-1 text-black rounded-sm font-bold m-1'>
                ▶ Play
            </button>
            <button className='bg-white bg-opacity-20 px-4 py-1 rounded-sm font-bold m-1'>
                 Ⓘ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle