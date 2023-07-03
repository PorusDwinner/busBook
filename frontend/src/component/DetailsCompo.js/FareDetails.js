import { useNavigate } from "react-router-dom";

const FareDetails = ({ bookedSeats , selectedBus , offer }) => {

    const navigate = useNavigate();

    const ticketPrice = selectedBus.Fare * bookedSeats.length;
    const tax = ticketPrice * 0.12;
    const total = ticketPrice + tax - offer;

    const proceed = () => {
        navigate('/payment')
    };

    return (
        <div>
            <div className="flex flex-col gap-4 h-full mt-4 p-5 rounded-[10px] border-2 border-solid border-[rgb(169,169,169)]">
                <h2 className="font-bold text-lg">Fare Details</h2>
                <div className="flex justify-between">
                    <p>Ticket Price</p>
                    <h2 className="font-semibold">₹ {ticketPrice}</h2>
                </div>
                <div className="flex justify-between">
                    <p>Tax(12%)</p>
                    <h2 className="font-semibold">₹ {tax}</h2>
                </div>
                <div className="flex justify-between">
                    <p>Offer</p>
                    <h2 className="font-semibold">-₹ {offer}</h2>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Total</p>
                    <h2 className="font-semibold">₹ {total}</h2>
                </div>
                <button className="bg-orange-500 py-1 text-white rounded-md"
                onClick={proceed}>
                    Process To Payment
                </button>
            </div>
        </div>
    )
}

export default FareDetails