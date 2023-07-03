import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAvailableBuses } from "../../slicer/slicer";
import { Button, Spinner } from 'flowbite-react';

const HomeSearch = () => {

  const busData = useSelector((state) => state.busData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValues) => ({ ...preValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const availableBuses = busData.filter((ele) => {
      return (
        ele.Source === formData.source &&
        ele.Destination === formData.destination &&
        ele.Data === formData.data
      )
    });
    dispatch(setAvailableBuses(availableBuses));
    navigate('/available-buses');
  };

  const citiesFrom = [...new Set(busData?.map((ele) => ele.Source))]
  const citiesTo = [...new Set(busData?.map((ele) => ele.Destination))];

  return (
    <div>
      {!busData ?
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </div>
         :
        <form onSubmit={handleSubmit}>
          <div className="h-[60vh] flex flex-wrap justify-center items-center
        sm:space-x-2 md:space-x-10 lg:space-x-20 xl:space-x-[10rem]">
            <div className="bg-white py-3 rounded-sm sm:px-6 md:px-10 lg:px-14 xl:px-16">
              <label htmlFor="source" className="text-slate-700 font-bold">
                <h1>From</h1>
                <hr />
              </label>

              <select className=" mt-2 text-slate-500" name="source" value={formData.source} onChange={handleChange}>
                <option>Select Source</option>
                {
                  citiesFrom.map((ele, i) => (
                    <option key={i} value={ele.Source}>
                      {ele}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="bg-white py-3 rounded-sm sm:px-6 md:px-10 lg:px-14 xl:px-16">
              <label htmlFor="destination" className="text-slate-700 font-bold">
                <h1>To</h1>
                <hr />
              </label>

              <select className=" mt-2 text-slate-500" name="destination" value={formData.destination} onChange={handleChange}>
                <option>Select Destination</option>
                {
                  citiesTo?.map((ele, i) => (
                    <option key={i} value={ele.Destination}>
                      {ele}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="bg-white py-3 rounded-sm sm:px-6">
              <label htmlFor="date" className="text-slate-600 font-bold">
                <h1>Journey Date</h1>
                <hr />
              </label>

              <input className="p-1 w-[10rem]"
                type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-orange-500 px-16 py-2 text-slate-200 font-medium rounded shadow-xl
            hover:bg-orange-600">
              Search
            </button>
          </div>

        </form>}
    </div>
  )
}

export default HomeSearch;