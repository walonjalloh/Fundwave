import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const data = { email, password };

    try {
      const response = await fetch('http://localhost:3800/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || 'An error occurred');
        return;
      }

      // Store the token in localStorage
      localStorage.setItem('token', result.token);
      setSuccess('Sign in successful!');

      // Clear form fields
      setEmail('');
      setPassword('');
      navigate('/explore_signIn');
    } catch (error) {
      console.error(error);
      setError('An error occurred while signing in');
    }
  };


  return (
    <section className="">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center rounded-xl px-12 md:px-20 border-black/50 w-fit">
          <div className="flex flex-row justify-start items-start">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-center text-4xl font-bold my-10">
            <h1 className='underline font-semibold tracking-tight'>Welcome back, sign in to continue</h1>
          </div>
          <div className="flex flex-col items-start justify-start">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <label htmlFor="email" className="font-bold text-2xl">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                  autoFocus
                  className="border-2 border-black/50 py-2 px-1 rounded-md md:w-[400px]"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="password" className="font-bold text-2xl">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-2 border-black/50 py-2 px-2 md:w-[400px] rounded-md"
                />
              </div>
              <div className="flex justify-end my-2">
                <p className="text-sm text-blue-400 font-thin">......forgot password</p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-10 my-4 items-center">
                <button
                  type='submit'
                  className="border-2 border-blue-800 py-2 px-8 rounded-xl bg-blue-800 text-white text-xl font-bold"
                >
                  Sign In
                </button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
          <div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2 font-semibold text-2xl underline">or continue with</p>
              <div className="flex flex-col gap-5 md:flex-row md:gap-10 mb-10">
                <div className="flex border-2 border-black/50 rounded-xl h-fit justify-center gap-2 items-center py-3 px-6">
                  <GoogleIcon className='h-16 w-16 text-blue-400'/>
                  <p className="font-bold text-xl">Google</p>
                </div>
                <div className="flex border-2 border-black/50 rounded-xl h-fit justify-center gap-2 items-center py-3 px-6">
                  <FacebookIcon className='h-16 w-16 text-blue-600'/>
                  <p className="font-bold text-xl">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>       
    </section>
  );
}

export default SignIn;
