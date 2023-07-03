import Travellers from '../component/DetailsCompo.js/Travellers';
import BusDetails from '../component/DetailsCompo.js/BusDetails';
import FareDetails from '../component/DetailsCompo.js/FareDetails';
import { useSelector } from 'react-redux';

const DetailsFile = () => {

  const bookedSeats = useSelector((state) => state.confirmedSeats);
  const selectedBus = useSelector((state) => state.selectedBus);
  const offer = useSelector((state) => state.offer);

  return (
    <div className='mt-6 ml-[4%] mr-[4%]'>
      <div className='flex space-x-4'>
        <div className='flex flex-col space-y-4 w-[70%]'>
            <div>
              <BusDetails selectedBus={selectedBus} bookedSeats={bookedSeats} />
            </div>

            <div>
              <h2 className="font-semibold text-xl">Enter Traveller Details</h2>
              <Travellers bookedSeats={bookedSeats} />
            </div>

        </div>

        <div className='p-4 w-[30%]'>
          <FareDetails bookedSeats={bookedSeats} selectedBus={selectedBus} offer={offer}/>
        </div>

      </div>
    </div>
  )
}

export default DetailsFile