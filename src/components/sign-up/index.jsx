import React from 'react';
import './styles.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from '../../firebase'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Password do not match!!')
            return;
        }


        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log('error sign up; ' + error.message)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='container' >
                <h1>SIGN UP</h1>
                <form className='form' onSubmit={this.handleSubmit} >

                    <input
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        placeholder="DisplayName"
                        className='form-input'
                        required />

                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Awesome Email"
                        className='form-input'
                        required />

                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Password"
                        className='form-input'
                        required />

                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        placeholder="Confirm Password"
                        className='form-input'
                        required />

                    <button type='submit' className='submit-btn' >SIGN UP</button>
                </form>
            </div>
        )
    }
}

export default SignUp;