import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setConfirmedSeats , setSelectedBus } from "../../slicer/slicer";

const SeatSummaryComp = ({ bus, bookedSeats }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFinalSubmit = () => {
        dispatch(setConfirmedSeats(bookedSeats));    
        dispatch(setSelectedBus(bus));
        navigate("/details-filing");
    };
    
    return (
        <div className='border rounded-md py-1 px-4 shadow-xl sm:space-y-2 lg:space-y-6 lg:h-full'>
            <h1 className='font-medium sm:text-md lg:text-lg'>Boarding & Dropping</h1>

            <div className='space-y-4'>
                <div className='flex justify-between space-x-16'>
                    <div className='flex flex-col'>
                        <p className='text-slate-700 font-medium sm:text-sm lg:text-md'>{bus.Source}</p>
                        <p className='text-sm'>RCT Roads</p>
                    </div>
                    <p className='text-green-800 font-medium sm:text-sm md:text-sm lg:text-sm'>{bus.DepartureTime}</p>
                </div>

                <div className='flex justify-between space-x-16'>
                    <div className='flex flex-col'>
                        <p className='text-slate-700 font-medium sm:text-sm lg:text-md'>{bus.Destination}</p>
                        <p className='text-sm'>RCT Roads</p>
                    </div>
                    <p className='text-green-800 font-medium sm:text-sm lg:text-sm'>{bus.ArrivalTime}</p>
                </div>

                <div><hr/></div>
            </div>

            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <p className='text-slate-600 text-lg font-medium sm:text-sm lg:text-md'>
                        Seat Count :
                    </p>
                    <p className='text-slate-600 font-bold text-green-800 sm:text-sm lg:text-lg'>
                        {bookedSeats.length}
                    </p>
                </div>

                <div><hr/></div>
            </div>

            <div className='flex justify-between'>
                <p className='font-medium'>Fair</p>
                <p className='text-green-800 font-bold'>
                  ₹ {bus.Fare * bookedSeats.length}/-
                </p>
            </div>

            <div className='flex justify-center'>
            { bookedSeats.length > 0 ?
                <div>
                    <button className='bg-orange-500 px-[5rem] py-1 rounded-sm text-white'
                    onClick={() => handleFinalSubmit()} >
                        Proceed
                    </button>
                </div> : 

                <div>
                    <button className='bg-orange-500 px-[5rem] py-1 rounded-sm text-white'
                    disabled={true}>
                        Proceed
                    </button>
                </div>
            }
            </div>
        </div>
    )
}

export default SeatSummaryComp;