
const BusDetails = ({ selectedBus , bookedSeats }) => {

  return (
    <div className="flex mt-4 rounded-md border-2 border-slate-300">
          <div className="flex flex-col justify-between p-5 ">
            <div className="flex flex-col gap-2.5">

              <div className="flex gap-2.5">
                <h3 className="font-bold text-lg">IntrCity Smart Bus</h3>
                <p className='bg-green-600 rounded-md px-2 text-white'>⭐4.5</p>
              </div>

              <div className="flex gap-2.5 text-slate-600 font-medium">
                <p>Ac | {28 - bookedSeats.length} Seates Left | 0 windows Left |</p>
                <p className='flex space-x-4'> Seats booked : {
                  bookedSeats.map((ele , i) => (
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
  )
}

export default BusDetails