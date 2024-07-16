import React, { useState } from 'react';
import './SignInPage.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPasswordd } from '../Firebase/Authentication/auth_signin_with_email';
import { auth } from '../Firebase/firebase';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signInWithEmailAndPasswordd(auth, email, password);
  }

  return (
    <div className='signin-container' onSubmit={handleSubmit}>
        <form className='signin-form'>
            <h1>Sign In</h1>
            <input type='email' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
            <input type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
            <button type='submit'>Sign In</button>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </form>
    </div>
  );
}

export default SignInPage;