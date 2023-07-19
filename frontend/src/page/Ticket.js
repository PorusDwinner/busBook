import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Ticket = () => {

    const loginState = useSelector((state) => state.loginState);
    const userName = useSelector((state) => state.userName);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const result = await fetch(`https://busbook-backend.onrender.com/api/tickets/${userName}`);
            const data = await result.json();
            setTickets(data);
        };
        fetchTickets();
    }, [userName]);

    console.log('Tickets :', tickets);

    return (
        <div>
            {
                !loginState ? (
                    <div className='flex justify-center items-center'>
                        <h1>Please Login To See Your Tickets</h1>
                    </div>
                ) : (
                    <div>
                        {
                            tickets.length < 1 ? (
                                <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
                                    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-center mt-6'>Account : <span className='text-slate-600 font-medium'>{userName}</span></h1>
                                        <div className=' flex'>
                                        {
                                            tickets.map((ele,i) => (
                                                <div className='flex flex-col p-6 shadow-xl border rounded-md m-4' key={i}>
                                                    <span className='font-medium text-slate-700'>Passenger : {ele.name}</span>            
                                                    <span>{ele.email}</span>            
                                                    <span>{ele.mobile}</span>            
                                                    <span>Age : {ele.age}</span>            
                                                    <span>Journey : {ele.date.slice(0,10)}</span>            
                                                    <span>Seat No : {ele.seat}</span>            
                                                </div>
                                            ))
                                        }    
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Ticket