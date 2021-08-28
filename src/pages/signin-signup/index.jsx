import React from 'react';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import './styles.css'


const SignInSignUp = (props) => (
    <div className='sign-in-sign-up'>
        <SignIn {...props} />
        <SignUp />
    </div>
)

export default SignInSignUp;