import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setLoginState } from '../../slicer/slicer';

const Topbar = () => {

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const loginState = useSelector((state) => state.loginState);

  return (
    <div className='flex justify-between bg-red-100/50 h-[3.5rem]'>
        
        <ul className='flex items-center sm:space-x-4 lg:space-x-8 xl:space-x-10'>
          <li className='ml-1'>
            <img className='w-[3rem]' src='/images/reserve.jpg' alt='reserve'/>
          </li>
          
          <li>
            <h3 className='font-bold text-slate-700 sm:text-lg'>Reserve</h3>
          </li>
          
          <li className='text-slate-600 text-sm font-medium'>
            <Link to ='/tickets'>Tickets</Link>
          </li>
          
          <li className='text-slate-600 text-sm font-medium'>
            <Link to='/contact-us'>Contact</Link>
          </li>
        </ul>

        <ul className='flex items-center gap-10'>
          <li className='text-slate-600 text-sm font-medium mr-4'>
            <Link to='/'>Home</Link>
          </li>
          
          { loginState ? 
            <li className='bg-orange-500 px-6 py-1 text-slate-200 rounded-sm shadow mr-4
            hover:orange-600' onClick={() => dispatch(setLoginState())}>
              {userName}
            </li> : null
          }
        </ul>
    </div>
  )
}

export default Topbar