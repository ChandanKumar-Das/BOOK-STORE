import Login from "./LogIn";
import { useNavigate } from 'react-router-dom';

const ForgotPassword =()=>{

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

    return(
        <>
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between mb-6 ">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py- px-4 rounded focus:outline-none focus:shadow-outline text-xl"
                type="button"
                onClick={handleCancel}
              >
                X
              </button>
              </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset Password
            </button>
            <div onClick={()=>document.getElementById('my_modal_3').showModal()} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Back to Login
            </div>
            <Login/>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}

export default ForgotPassword;