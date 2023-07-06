import { BrowserRouter , Routes , Route } from "react-router-dom";
import AvailableBuses from "./page/AvailableBuses";
import Topbar from "./component/Topbar/Topbar";
import DetailsFile from "./page/DetailsFile";
import Payment from "./page/Payment";
import LoginSignup from "./page/LoginSignup"
import Home from "./page/Home";
import Ticket from "./page/Ticket";
import BookingConfirm from "./page/BookingConfirm";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import {setBusData} from "./slicer/slicer";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState);

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(`https://busbook-backend.onrender.com/api/bus-data`)
      const data = await result.json();
      dispatch(setBusData(data));
    };
    fetchData();
  },[dispatch]);

  return (
    <BrowserRouter>
      <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/available-buses" element={<AvailableBuses/>}/>
          <Route exact path="/tickets" element={<Ticket/>}/>
          <Route exact path="/details-filing" element={ loginState ? <DetailsFile/> : <LoginSignup/> }/>
          <Route exact path="/payment" element={<Payment/>}/>
          <Route exact path="/booking-confirm" element={<BookingConfirm/>}/>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
