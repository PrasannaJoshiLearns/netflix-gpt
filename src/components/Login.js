import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    let message;
    if (isSignInForm) {
      message = checkValidData(
        undefined,
        email.current.value,
        password.current.value
      );
    } else {
      message = checkValidData(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: 'https://avatars.githubusercontent.com/u/185161832?v=4',
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate('/browse');
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
          // ..
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/browse');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute bg-black w-3/12 p-12 mx-auto left-0 right-0 my-36 bg-opacity-80'
      >
        <h1 className='font-bold text-white text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-70 text-white'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-70 text-white'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-70 text-white'
        />

        <p className='font-bold text-red-500 text-lg py-4'>{errorMessage}</p>

        <button
          className='py-4 bg-red-700 w-full my-6 rounded-lg text-white'
          onClick={handleButtonClick}
        >
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
