import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Ticket = () => {
 
  const loginState = useSelector((state) => state.loginState);
  const userName = useSelector((state) => state.userName);
  const [tickets , setTickets] = useState([]);  

  useEffect(() => {
    const fetchTickets = async() => {
        const result = await fetch(`https://busbook-backend.onrender.com/api/tickets/${userName}`);
        const data = await result.json();
        setTickets(data);
    };
    fetchTickets();
  },[userName]);

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
                tickets.length <= 0 ? (
                    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
                        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col'>
                        <h1>Account : <span className='text-slate-600' >{userName}</span></h1>        
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