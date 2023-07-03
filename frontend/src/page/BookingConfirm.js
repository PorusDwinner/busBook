import { useSelector } from "react-redux"

const BookingConfirm = () => {
  
  const selectedBus = useSelector((state) => state.selectedBus);
  const bookedSeats = useSelector((state) => state.confirmedSeats);
  return (
    <div className="flex flex-col space-y-6">
      <div className='w-[60%] display-block m-auto border shadow-xl p-6 mt-4 rounded-md'>
        <div className='flex justify-center items-center'>
          <img className='w-[4rem] h-[4rem]'
          src='/images/check.png' alt='check mark'/>
        </div>

        <div className='mt-4'>
          <h1 className='font-bold text-5xl text-center'>Booking Has Been Confirmed</h1>
        </div>

        <div className='w-[80%] display-block m-auto mt-6'>
          <div className='flex flex-col space-y-4'>
            <p>Ticket ID : <span className="text-slate-600 font-medium">{selectedBus.BusNo}{selectedBus.Date}</span></p>
            <p>Payment ID : <span className="text-slate-600 font-medium">{selectedBus.BusNo}</span></p>
            <p>Payment Details : <span className="text-slate-600 font-medium">{selectedBus.Fare}</span></p>
            <p>Contact Details : <span className="text-slate-600 font-medium">9845712630</span></p>
          </div>
        </div>
      </div>

      <div className="w-[80%] display-blcok m-auto p-2">
      <div className="flex mt-4 rounded-md border-2 border-slate-300">
          <div className="flex flex-col justify-between p-5 ">
            <div className="flex flex-col gap-2.5">

              <div className="flex gap-2.5">
                <h3 className="font-bold text-lg">IntrCity Smart Bus</h3>
                <p className='bg-green-600 rounded-md px-2 text-white'>⭐4.5</p>
              </div>

              <div className="flex gap-2.5 text-slate-600 font-medium">
                <p>Ac | {28 - bookedSeats?.length }Seates Left | 0 windows Left |</p>
                <p className='flex space-x-4'> Seats booked : {
                  bookedSeats?.map((ele , i) => (
                    <div key={i}>
                      {ele.seat}
                    </div>
                  ))
                }  
                </p>
              </div>

              <div className="flex gap-2.5">
                <p>{selectedBus.DepartureTime}</p>
                <p> --- 07 hrs 58 min ---</p>
                <p>{selectedBus.ArrivalTime} , {selectedBus.Date}</p>
              </div>

              <div className="flex space-x-20 text-slate-700 font-medium">
                <p className="text-xl border bg-slate-300 text-slate-800 px-4 rounded-sm">{selectedBus.Source}</p>
                <p>To</p>
                <p className="text-xl border bg-slate-300 text-slate-800 px-4 rounded-sm">{selectedBus.Destination}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BookingConfirm