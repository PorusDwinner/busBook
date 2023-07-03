import { useSelector, useDispatch } from 'react-redux';
import { setSelectedBus, removeSelectedBus } from '../../slicer/slicer';
import SeatSelectionComp from './SeatSelectionComp';

const Trips = () => {

    const dispatch = useDispatch();

    const availableBus = useSelector((state) => state.availableBuses);
    console.log('available buses in trips : ',availableBus);
    const selectedBus = useSelector((state) => state.selectedBus);

    const handleSelectedBus = (bus) => {
        dispatch(setSelectedBus(bus));
    };

    const removebus = () => {
        dispatch(removeSelectedBus());
    };

    return (
        <div className='p-2'>
            <div>
                {
                    availableBus?.map((ele) => (
                        <div key={ele.BusNo} className='flex flex-col justify-center border rounded-md p-4 shadow-xl'>
                            <div className='row flex justify-between'>
                                <div className='col-md-9 '>
                                    <div className='flex flex-col space-y-1'>

                                        <div className='flex justify-between text-slate-700 font-bold sm:text-md sm:pt-1'>
                                            <h2>{ele.BusName}<span className='bg-green-600 ml-2 px-1 py-[0.1rem] text-sm rounded-sm' >⭐4.5</span></h2>
                                        </div>

                                        <p className='text-sm text-slate-600'>
                                            AC Coaches | 28 Seats | 18 Window Seats
                                        </p>

                                        <div className='pt-2'>
                                            <h6 className='flex justify-between text-slate-600 font-medium sm:text-md'>
                                                <div>{`${ele.DepartureTime} , ${ele.Date}`}</div>
                                                <span className='px-3 ml-[10px] text-slate-600 sm:text-md'>
                                                    {`${ele.TripTime}`}
                                                </span>
                                                {`${ele.ArrivalTime} , ${ele.Date}`}
                                            </h6>
                                        </div>

                                        <div className='flex text-blue-500 font-medium pt-4 sm:space-x-2 sm:text-[12px]'>
                                            {
                                                ele.Animeties_list.map((item, i) => (
                                                    <div key={i}>
                                                        {item}
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>
                                </div>

                                <div className='flex flex-col justify-center items-center space-y-8 border-l-2 border-slate-700 rounded-md pl-8'>
                                    <div className='flex flex-col text-center space-y-4'>
                                        <p className='text-slate-700 font-medium sm:text-sm'>Trip Cost</p>
                                        <p className='text-slate-600 font-bold sm:text-lg'>₹ {ele.Fare}</p>
                                    </div>
                                    {
                                        (selectedBus && ele.BusNo === selectedBus.BusNo) ?
                                            <div className='flex justify-end mb-2'>
                                                <button className='bg-orange-600 text-white p-2 rounded hover:bg-orange-500 sm:text-sm'
                                                    onClick={() => removebus()}>
                                                    Hide Seats
                                                </button>
                                            </div> :
                                            <div className='flex justify-end'>
                                                <button className='bg-orange-600 px-2 text-white rounded hover:bg-orange-500 sm:text-sm'
                                                    onClick={() => handleSelectedBus(ele)}>
                                                    View Seats
                                                </button>
                                            </div>
                                    }
                                </div>
                            </div>



                            <div className='mt-2'>
                                {
                                    (selectedBus && ele.BusNo === selectedBus.BusNo) ? (
                                        <SeatSelectionComp bus={ele} />
                                    ) : null
                                }
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Trips