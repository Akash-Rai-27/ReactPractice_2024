import React from 'react'
import image from '../assets/oops.svg'
function ErrorPage() {
  return (
    <div className=''>
        <div className=' flex flex-wrap bg-gray-600 flex-col sm:flex-row px-2 py-2'>

            <div className='basis-[50%] flex flex-wrap bg-fuchsia-00 justify-center '>
                <img  src={image} alt = 'error image'/>
            </div>

            <div className='basis-[50%] flex flex-wrap px-5 py-2 font-mono justify-center bg-fuchsia-00 sm:self-center sm:gap-4'>
                <div className='bg-violet-00'>
                    <h1 className='text-5xl font-bold text-gray-400 border-gray-400 border-x-2 border-y-2 text-center px-3 sm:px-8 py-1'>404 ERROR</h1>
                </div>
                <div className='w-full text-center py-2 bg-gray-00'>
                    <h1 className='text-3xl font-bold text-gray-400 text-center px-3 py-1'>Page not Found</h1>
                </div>
                <div className='text-gray-200 py-3 bg-orange-00 '>
                    <p>We couldnt find the page you are looking for, May be aliens have stolen it...</p>
                </div>
                <div className='text-gray-100 border-violet-400 border-x-2 border-y-2 px-3 py-2 mb-3 bg-violet-500 sm:hover:bg-opacity-20'>
                    <button className='text-3xl font-bold '>GO HOME</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage