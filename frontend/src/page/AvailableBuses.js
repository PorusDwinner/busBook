import { useState } from "react";
import Trips from "../component/AvailableBusesComponents/Trips";
import '../styles/AvailableBuses.css';

const AvailableBuses = () => {

  // const objectArray = [s
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>intrCity Bus</span>
  //       </label>
  //     ),
  //     value: "intrCity Bus",
  //   },
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>Safar Bus</span>
  //       </label>
  //     ),
  //     value: "Safar Bus",
  //   },
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>Zing Bus</span>
  //       </label>
  //     ),
  //     value: "Zing Bus",
  //   },
  // ];

  // const aquaticCreatures = [
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>Kolkata</span>
  //       </label>
  //     ),
  //     value: "Kolkata",
  //   },
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>Mumbai</span>
  //       </label>
  //     ),
  //     value: "Mumbai",
  //   },
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>Bangalore</span>
  //       </label>
  //     ),
  //     value: "Bangalore",
  //   },
  // ];
  // const rating = [
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>4 star or more</span>
  //       </label>
  //     ),
  //     value: "4+",
  //   },
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>3 star or more</span>
  //       </label>
  //     ),
  //     value: "3+",
  //   },
  //   {
  //     label: (
  //       <label>
  //         <input type="checkbox" onChange={() => { }} />
  //         <span style={{ paddingLeft: "15px" }}>0 to 2 star or more</span>
  //       </label>
  //     ),
  //     value: "0 to 2",
  //   },
  // ];

  let filterValues = {
    departure: {
      session: ''
    },
    arival: {
      session: ''
    }
  };

  const handelCheckBox = (e, time) => {
    if (time === 'departure') {
      if (filterValues.departure.session !== null && filterValues.departure.session === e.target.value) {
        filterValues.departure.session = '';
      } else {
        filterValues.departure.session = e.target.value;

        setTimeout(() => {
          fetch('http://localhost:4000/api/filter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(filterValues)
          })
            .then((res) => console.log(res))
            .catch((err) => console.log('Error in reciving data from server'));
        }, 1000);

      }
    } else if (time === 'arival') {
      if (filterValues.arival.session !== null && filterValues.arival.session === e.target.value) {
        filterValues.arival.session = '';
      } else {
        filterValues.arival.session = e.target.value;
      }
    }
    // console.log(filterValues);
  }



  return (
    <div className='flex m-2'>
      <div id='mainFilterDiv' className="flex flex-col mr-1 sm:w-[30%] lg:w-[20%]">
        <div className="flex justify-between gap-5 p-2.5 border-2 border-solid border-[rgb(169,169,169)]">
          <h4>Filter</h4>
          <h4>Clear All</h4>
        </div>
        <div className="flex flex-col p-2.5 border-2 border-solid border-[rgb(169,169,169)]">
          <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
            <div>
              <h4>Departure Time</h4>
            </div>
            <div>
              <input type="checkbox" value="morning" onChange={(e) => handelCheckBox(e, 'departure')} />
              <span style={{ paddingLeft: "15px" }}>Morning Session</span>
            </div>
            <div>
              <input type="checkbox" value="afternoon" onChange={(e) => handelCheckBox(e, 'departure')} />
              <span style={{ paddingLeft: "15px" }}>Afternoon Session</span>
            </div>
            <div>
              <input type="checkbox" value="evening" onChange={(e) => handelCheckBox(e, 'departure')} />

              <span style={{ paddingLeft: "15px" }}>Evening Session</span>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
            <div>
              <h4>Arrival Time</h4>
            </div>
            <div>
              <input type="checkbox" value="morning" onChange={(e) => handelCheckBox(e, 'arival')} />
              <span style={{ paddingLeft: "15px" }}>Moining Session</span>
            </div>
            <div>
              <input type="checkbox" value="afternoon" onChange={(e) => handelCheckBox(e, 'arival')} />
              <span style={{ paddingLeft: "15px" }}>Afternoon Session</span>
            </div>
            <div>
              <input type="checkbox" value="evening" onChange={(e) => handelCheckBox(e, 'arival')} />
              <span style={{ paddingLeft: "15px" }}>Evening Session</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-[70%] lg:w-[100%]">
        <Trips />
      </div>
    </div>
  )
}

export default AvailableBuses