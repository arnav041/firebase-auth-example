import React from 'react';
import { signInWithGoogle } from '../../firebase';
import { auth } from '../../firebase'
import './styles.css';


const SignIn = ({ currentUser }) => {
    return (
        <div className='container' >
            <h1>SIGN IN</h1>
            <form className='form' >

                <input
                    type="email"
                    placeholder="Enter your email"
                    className='form-input'
                    required />

                <input
                    type="password"
                    placeholder="Enter your password"
                    className='form-input'
                    required />

                <button type='submit' className='submit-btn' >SIGN IN</button>
                {
                    !currentUser ?
                        <button type='button' className='submit-btn google-signin ' onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</button>
                        :
                        <button type='button' className='submit-btn google-signin '
                            onClick={() => auth.signOut()} >SIGN OUT FROM GOOGLE</button>
                }
            </form>
        </div>
    )
}

export default SignIn;