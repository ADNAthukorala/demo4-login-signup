import React from 'react';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <div className='signup-container'>
        <form className='signup-form'>
            <h1>Sign Up</h1>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
            <p>Already have an account? <a href='/'>Sign In</a></p>
        </form>
    </div>
  )
}

export default SignUpPage;