import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const navigate = useNavigate();

  const pay = () => {
    navigate('/booking-confirm');
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center
    items-center'>

      <div className='bg-white p-6 flex flex-col'>
        <div>
            <h1 className='font-mono text-3xl text-center text-green-800'>busbook.in</h1>
        </div>

        <div className='flex flex-col space-y-10'>
          <div className='flex justify-around mt-4'>
            <h3 className='font-bold'>Payment</h3>
            <h3 className='font-bold'>Total : 899/-</h3>
          </div>
          <input className='p-1 text-slate-600 border'
            type='text' size={40} placeholder='Name on Card*' />
          <input className='p-1 text-slate-600 border'
            type='number' size={40} placeholder='Card Number' />

          <div className='flex justify-around'>
            <input className='px-5 text-slate-600 border'
              type='date' size={20} placeholder='Expiry Date' />
            <input className='p-1 text-slate-600 border'
              type='number' size={20} placeholder='Security Code' />
          </div>

          <button className='bg-blue-600 text-slate-200 font-mono px-6 py-1
          hover:bg-blue-500' onClick={pay}>
            Pay
          </button>

        </div>
      </div>

    </div>
  )
}

export default Payment