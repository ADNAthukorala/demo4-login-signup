import React, { useState } from 'react';
import './SignUpPage.css';
import { Link } from 'react-router-dom';
import { signUpWithEmailAndPassword } from '../Firebase/Authentication/auth_signup_with_email';
import { auth } from '../Firebase/firebase';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signUpWithEmailAndPassword(auth, email, password);
  }

  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input type='email' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
            <input type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
            <button type='submit'>Sign Up</button>
            <p>Already have an account? <Link to='/'>Sign In</Link></p>
        </form>
    </div>
  );
}

export default SignUpPage;