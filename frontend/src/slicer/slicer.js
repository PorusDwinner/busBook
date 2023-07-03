import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState : false,
    userName : '',
    lowerBirthSeats : [
        { id: 1, seatNumber : '1A' ,selected: false },
        { id: 2, seatNumber : '2A' ,selected: false },
        { id: 3, seatNumber : '3A' ,selected: false },
        { id: 4, seatNumber : '4A' ,selected: false },
        { id: 5, seatNumber : '5A' ,selected: false },
        { id: 6, seatNumber : '6A' ,selected: false },
        { id: 7, seatNumber : '7A' ,selected: false },
        { id: 8, seatNumber : '8A' ,selected: false },
        { id: 9, seatNumber : '9A' ,selected: false },
        { id: 10, seatNumber : '10A' ,selected: false },
        { id: 11, seatNumber : '11A' ,selected: false },
        { id: 12, seatNumber : '12A' ,selected: false },
        { id: 13, seatNumber : '13A' ,selected: false },
        { id: 14, seatNumber : '14A' ,selected: false },
        { id: 15, seatNumber : '15A' ,selected: false },
        { id: 16, seatNumber : '16A' ,selected: false },
        { id: 17, seatNumber : '17A' ,selected: false },
        { id: 18, seatNumber : '18A' ,selected: false },
        { id: 19, seatNumber : '19A' ,selected: false },
        { id: 20, seatNumber : '20A' ,selected: false },
        { id: 21, seatNumber : '21A' ,selected: false },
        { id: 22, seatNumber : '22A' ,selected: false },
        { id: 23, seatNumber : '23A' ,selected: false },
        { id: 24, seatNumber : '24A' ,selected: false },
        { id: 25, seatNumber : '25A' ,selected: false },
        { id: 26, seatNumber : '26A' ,selected: false },
        { id: 27, seatNumber : '27A' ,selected: false },
        { id: 28, seatNumber : '28A' ,selected: false },
    ],
    upperBirthSeats : [
        { id: 1, seatNumber : '1B' ,selected: false },
        { id: 2, seatNumber : '2B' ,selected: false },
        { id: 3, seatNumber : '3B' ,selected: false },
        { id: 4, seatNumber : '4B' ,selected: false },
        { id: 5, seatNumber : '5B' ,selected: false },
        { id: 6, seatNumber : '6B' ,selected: false },
        { id: 7, seatNumber : '7B' ,selected: false },
        { id: 8, seatNumber : '8B' ,selected: false },
        { id: 9, seatNumber : '9B' ,selected: false },
        { id: 10, seatNumber : '10B' ,selected: false },
        { id: 11, seatNumber : '11B' ,selected: false },
        { id: 12, seatNumber : '12B' ,selected: false },
        { id: 13, seatNumber : '13B' ,selected: false },
        { id: 14, seatNumber : '14B' ,selected: false },
        { id: 15, seatNumber : '15B' ,selected: false },
        { id: 16, seatNumber : '16B' ,selected: false },
        { id: 17, seatNumber : '17B' ,selected: false },
        { id: 18, seatNumber : '18B' ,selected: false },
        { id: 19, seatNumber : '19B' ,selected: false },
        { id: 20, seatNumber : '20B' ,selected: false },
        { id: 21, seatNumber : '21B' ,selected: false },
        { id: 22, seatNumber : '22B' ,selected: false },
        { id: 23, seatNumber : '23B' ,selected: false },
        { id: 24, seatNumber : '24B' ,selected: false },
        { id: 25, seatNumber : '25B' ,selected: false },
        { id: 26, seatNumber : '26B' ,selected: false },
        { id: 27, seatNumber : '27B' ,selected: false },
        { id: 28, seatNumber : '28B' ,selected: false },
    ],
    busData : null,
    availableBuses : [],
    selectedBus : [],
    confirmedSeats : null,
    offer : 50,
    finalBookingDetails : null,
};

export const busSlicer = createSlice({
    name : 'BUS_RESERVE',
    initialState,
    reducers : {
        setLoginState(state , action){
            state.loginState = !state.loginState;
        },
        setUserName(state , action){
            state.userName = action.payload
        },
        setAvailableBuses(state , action){
            state.availableBuses = action.payload;
        },
        setSelectedBus(state , action){
            state.selectedBus = action.payload;
        },
        removeSelectedBus(state , action){
            state.selectedBus = [];
        },
        setConfirmedSeats(state , action){
            let data = action.payload;
            state.confirmedSeats = [...data]
        },
        setFinalBookingDetails(state , aciton){
            state.finalBookingDetails = aciton.payload;
        },
        setBusData(state , action){
            state.busData = action.payload;
        }
    }
});

export const {
    setLoginState , setAvailableBuses , setSelectedBus , removeSelectedBus , setConfirmedSeats , setFinalBookingDetails ,
    setBusData , setUserName} = busSlicer.actions;

export default busSlicer.reducer;