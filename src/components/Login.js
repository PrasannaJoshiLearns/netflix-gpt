import React, { useState } from 'react';
import Header from './Header';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/40ed4063-8e1c-4627-8627-137db7aa6d1b/web/IN-en-20250331-TRIFECTA-perspective_c33979e3-aad8-4db2-bbc5-fd7fc12f2d4d_large.jpg'
          alt='bg-image'
        />
      </div>
      <form className='absolute bg-black w-3/12 p-12 mx-auto left-0 right-0 my-36 bg-opacity-80'>
        <h1 className='font-bold text-white text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-70 text-white'
          />
        )}
        <input
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-70 text-white'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-70 text-white'
        />
        <button className='py-4 bg-red-700 w-full my-6 rounded-lg text-white'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='py-6 text-white' onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix?Sign Up Now'
            : 'Already Registered? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
