import React from 'react'

const HomeBranding = () => {
  return (
    <div>
      <div>
        <h1 className=' p-8 font-bold font-sans text-center text-2xl'>Travel with World's Largest Bus Booking Platform</h1>
      </div>
      
      <div className='flex justify-center items-stretch'>
        
        <div className='flex flex-col shadow-lg p-4 gap-2 items-center w-64'>
          <img className=' object-cover'
          src='/Images/busLogo.jpg' alt='busLogo'/>

          <h1 className='text-lg font-semibold'>2000 +</h1>
          <h2 className='font-medium text-slate-500'>Bus Collections</h2>
        </div>
        
        <div className='flex flex-col shadow-lg p-4 gap-2 items-center w-64'>
          <img className=' object-cover' src='/Images/happyLogo.jpg' alt='happyLogo' />
          <h1 className='text-lg font-semibold'>20 Million</h1>
          <h2 className='font-medium text-sm text-slate-500'>happy customers globally</h2>
        </div>
        
        <div className='flex flex-col shadow-lg p-4 gap-2 items-center w-64'>
          <img className='h-40 w-full pt-2 px-4 object-center' src="/Images/ticketLogo.png" alt='ticketLogo' />
          <h1 className='text-lg font-semibold'>5000 +</h1>
          <h2 className='font-medium text-slate-500'>tickets booked everyday</h2>
        </div>
      </div>
      <div>
        <h1 className='pt-16 font-bold font-sans text-center text-2xl'>Here's what a  few of our customers</h1>
        <h1 className='pb-8 font-bold font-sans text-center text-2xl'>have to say about us</h1>
      </div>
      <div className='flex justify-center px-2 bg-gray-200 py-8 mb-12 md:gap-4'>
        <div className='flex w-1/3 flex-col bg-white rounded-md shadow-md p-4'>
          <div className='flex gap-4'>
            <h1 className='text-white font-bold text-xl bg-pink-300 p-2 px-3 rounded-full'>V</h1>
            <div className='flex flex-col'>
              <h1 className='font-semibold sm:text-md'>Vatsal Agrawal</h1>
              <h2 className='text-sm text-slate-400'>Customer since 2022</h2>
            </div>
          </div>
          <div className='bg-green-500 text-white text-sm w-10 px-1 my-3 rounded-md'>&#9734;4.5 </div>
          <span className='text-slate-500 sm:text-sm lg:text-md'>Awesome travel experience with reserve..Excellent staff...</span>
        </div>
        <div className='flex w-1/3 flex-col  bg-white rounded-md shadow-md p-4'>
          <div className='flex gap-4'>
            <h1 className='text-white text-center font-bold text-xl bg-pink-300 pt-3 px-4 rounded-full'>V</h1>
            <div className='flex flex-col'>
              <h1 className='font-semibold sm:text-md'>Vanya Jain</h1>
              <h2 className='text-sm text-slate-400'>Customer since 2019</h2>
            </div>
          </div>
          <div className='bg-green-500 text-white text-sm w-10 px-1 my-3 rounded-md'>&#9734;4.0</div>
          <span className='text-slate-500 sm:text-sm lg:text-md'>Awesome service..Always a best time with reserve.Best service globally.</span>
        </div>
        <div className='flex w-1/3 flex-col  bg-white rounded-md shadow-md p-4'>
          <div className='flex gap-4'>
            <h1 className='text-white text-center font-bold text-xl bg-pink-300 pt-3 px-4 rounded-full'>S</h1>
            <div className='flex flex-col'>
              <h1 className='font-semibold sm:text-md'>Seema singh</h1>
              <h2 className='text-sm text-slate-400'>Customer since 2020</h2>
            </div>
          </div>
          <div className='bg-green-500 text-white text-sm w-10 px-1 my-3 rounded-md'>&#9734;4.2</div>
          <span className='text-slate-500 sm:text-sm lg:text-md'>Awesome travel experience with reserve.Excellent staff.</span>
        </div>
      </div>
    </div>
  )
}

export default HomeBranding