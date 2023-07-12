import '../styles/LoginSignup.css'
import Login from '../component/LoginSignupCompo/Login';
import Signup from '../component/LoginSignupCompo/Signup';

const LoginSignup = () => {

  return (
    <div className='flex justify-center items-center space-x-16 h-screen bg-slate-100/50' id='mainLoginSignupDiv'>
        <div id='loginCompo'>
            <Login/>
        </div>

        <div id='signupComp'>
            <Signup/>
        </div>
    </div>
  )
}

export default LoginSignup