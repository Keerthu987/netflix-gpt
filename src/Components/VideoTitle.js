import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video py-[18%] px-[6%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-s w-1/3'>{overview} </p>
      <div  className=''>
          <button className='bg-white hover:bg-opacity-50 rounded-lg text-black py-4 px-7 w-18 text-xl '> ▶️ Play</button>
          <button  className='bg-gray-500 bg-opacity-50 rounded-lg text-white py-4 px-7 w-18 text-xl mx-2 '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
