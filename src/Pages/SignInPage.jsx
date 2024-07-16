import React from 'react';
import './SignInPage.css';
import { Link } from 'react-router-dom';

function SignInPage() {
  return (
    <div className='signin-container'>
        <form className='signin-form'>
            <h1>Sign In</h1>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Sign In</button>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </form>
    </div>
  );
}

export default SignInPage;