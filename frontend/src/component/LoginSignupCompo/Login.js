import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../slicer/slicer";
import { setLoginState } from "../../slicer/slicer";

const Login = () => {

  const dispatch = useDispatch();
  const [showSpinner , setShowSpinner] = useState(false);
  const [loginData, setLonginData] = useState({
    userName: '',
    password: '',
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setLonginData((prevData) => (
      {
        ...prevData , [name] : value
      }
    ))
  };

  const handelSubmit = async(e) => {
      e.preventDefault();
      setShowSpinner(true);
        const isVerified = await fetch(`https://busbook-backend.onrender.com/api/check/${loginData.userName}/${loginData.password}`);
        const response = await isVerified.json();
        console.log('response from the server :', response);
        if(response === 'verified'){
          dispatch(setLoginState())
          dispatch(setUserName(`${loginData.userName}`))
        } else{
          alert('Wrong Credientials or Server not responding');
          setShowSpinner(false);
        }
  };

  return (
    <div className='bg-slate-100 h-screen flex justify-center items-center'>
      <div className='p-8'>

          <div className="text-2xl text-center font-bold m-6 text-slate-700 font-mono">
            <h1>Already a user ?</h1>
          </div>

          <form onSubmit={handelSubmit} className="flex flex-col space-y-8">
              <input className="p-2 rounded-sm " placeholder="Enter user name..."
              type='text' size={40} name='userName' value={loginData.userName} onChange={handelChange} />

              <input className=" p-2 rounded-sm" placeholder="Enter password..."
              type='text' size={40} name='password' value={loginData.password} onChange={handelChange} />

              <button type="submit" className="bg-blue-600 text-slate-200 font-mono text-xl px-6 py-1 rounded-md
              hover:bg-blue-500">
                Login
              </button>
          </form>
      </div>
      <div>
      {
        showSpinner &&
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </div>
      }  
      </div>
    </div>
  )
}

export default Login