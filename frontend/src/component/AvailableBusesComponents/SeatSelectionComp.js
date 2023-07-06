import '../../styles/SeatSelectionComp.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import SeatSummaryComp from './SeatSummaryComp';

const SeatSelectionComp = ({ bus }) => {

    // GETTING SEAT DATA FORM GLOBAL STORE  
    const seatData = useSelector((state) => state.lowerBirthSeats);
    const seatData2 = useSelector((state) => state.upperBirthSeats);

    // HERE WE ARE ASSIGNING SAME ABOVE DATA TO NEW VARIABLES, BECUASE REDUX WILL NOT ALLOW TO MUTATE INITIAL STATES
    const [lowerBirthSeats, setLowerBirthSeats] = useState(seatData);
    const [upperBitrthSeats, setupperBirthSeats] = useState(seatData2);

    // IN ORDER TO STORE BOOKING DETAILS WE ARE CREATING THIS ARRAY
    const [bookedSeats, setbookedSeats] = useState([]); 

    const handleSeatClick = (seatNumber, index) => {

      setLowerBirthSeats((prevSeatData) => {
          const newSeatData = [...prevSeatData];
          newSeatData[index] = { ...newSeatData[index], selected: !newSeatData[index].selected };
          return newSeatData
      });

      let find = false;
      if (bookedSeats) {
          for (let ele of bookedSeats) {
              if (ele.seat === seatNumber) find = true;
          };
      };
      if (!find) {
          for (let ele of seatData) {
              if (ele.seatNumber === seatNumber) {
                  bookedSeats.push({
                      seat : seatNumber,
                      busNo : ele.BusNo,
                  });
              }
          };
      } else {
          setbookedSeats(
              bookedSeats.filter((ele) => ele.seat !== seatNumber)
          )
      }
  };

  const handleSeatClick2 = (seatNumber, index) => {

      setupperBirthSeats((prevSeatData) => {
          const newSeatData = [...prevSeatData];
          newSeatData[index] = { ...newSeatData[index], selected: !newSeatData[index].selected };
          return newSeatData
      });

      let find = false;
      if (bookedSeats) {
          for (let ele of bookedSeats) {
              if (ele.seat === seatNumber) find = true;
          };
      };

      if (!find) {
          for (let ele of seatData2) {
              if (ele.seatNumber === seatNumber) {
                  bookedSeats.push({
                      id: ele.id,
                      seat: seatNumber,
                      selected: true,
                      bus_No: bus.BusNo
                  })
              }
          };
      } else {
          setbookedSeats(
              bookedSeats.filter((ele) => ele.seat !== seatNumber)
          )
      }
  };

    return (
      <div>
      <div className="row m-0 justify-between border-t w-full">

          <div className="col-md-9 col-sm-12">
              <h5 className='text-slate-600 font-medium'>Select Seats</h5>
              <div className="radio-div flex text-sm sm:space-x-4">
                  <p className='text-slate-700 font-bold'>Seats Price:</p>
                  <label className="radio-btn border shadow sm:text-[12px] sm:p-1">
                      <input type="radio" name="seatPrice" value="all" />
                      All
                  </label>
                  <label className="radio-btn border shadow sm:text-[12px] sm:p-1">
                      <input type="radio" name="seatPrice" value="200" />
                      ₹ 200
                  </label>
                  <label className="radio-btn border shadow sm:text-[12px] sm:p-1">
                      <input type="radio" name="seatPrice" value="300" />
                      ₹ 300
                  </label>
                  <label className="radio-btn border shadow sm:text-[12px] sm:p-1">
                      <input type="radio" name="seatPrice" value="400" />
                      ₹ 400
                  </label>
              </div>
              <div className='lg:flex lg:flex-row lg:justify-around lg:space-x-4 sm:flex sm:flex-col'>
                  <div className='sm:w-[100%] lg:w-[70%]'>
                      <div className="flex mt-2">
                          <div className="slot-row border-2 rounded-lg shadow sm:w-[100%]">

                              <p className="text-slate-400 text-sm text-center m-1">
                                  Lower Birth
                              </p>

                              <div className="flex flex-wrap seat-grid p-3 justify-end ">
                                  {
                                      lowerBirthSeats?.map((seat, index) => (
                                          <div className={(seat.selected ? "selected" : "notSelected")} key={seat.seatNumber}
                                              onClick={() => handleSeatClick(seat.seatNumber, index)}>
                                                <div className=' h-[23px] border-r-[20px] border-slate-200 p-1 text-[12px]'>{seat.seatNumber}</div>
                                          </div>
                                      ))
                                  }
                              </div>
                          </div>
                      </div>


                      <div className="flex mt-2">
                          <div className="slot-row border-2 rounded-lg shadow sm:w-[100%]">
                              <p className="text-slate-400 text-sm text-center m-1">Upper Birth</p>
                              <div className="flex flex-wrap seat-grid p-3 justify-end">
                                  {
                                      upperBitrthSeats.map((seat, index) => (
                                          <div className={(seat.selected ? " selected" : "notSelected")}
                                              key={seat.seatNumber} onClick={() => handleSeatClick2(seat.seatNumber, index)}>
                                                <div className='h-[23px] border-r-[20px] border-slate-200 text-[12px] p-1'>{seat.seatNumber}</div>
                                          </div>
                                      ))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='lg:w-[30%]'>
                      <SeatSummaryComp bus={bus} bookedSeats={bookedSeats} />
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}

export default SeatSelectionComp;