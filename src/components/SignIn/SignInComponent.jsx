import React from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth,signInWithGoogle} from '../../firebase/firebase.js'
import {withRouter} from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButtonComponent';
import FormInput from '../FormInput/FormInputComponent';
import './signin.scss';

class SignInComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const emailInput = this.state.email;
            const passwordInput = this.state.password;
          const resposenFromApi =  await fetch("http://localhost:8080/api/v1/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email : emailInput,
                    password: passwordInput
                })
            })
            const data = await resposenFromApi.json();
            if(data){
                localStorage.setItem("user", JSON.stringify(data));
                this.props.history.push('/')

            }
        }catch(err){
            console.log("Error: " + err);

        }
        this.setState({
            email: '',
            password: ''
        })
    }
    handleGoogleSignin = async() => {
        try{
           await signInWithGoogle();

        }catch(err) {
            console.log("Error: " + err);
        }
    } 
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label="Email"
                    required
                    />
                    <FormInput
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label="Password"
                    required
                    />
                 <div className='buttons'>
                 <CustomButton type='submit'> Sign In </CustomButton>
                 <CustomButton onClick={this.handleGoogleSignin} isGoogleSignIn> Sign In With Google </CustomButton>
                 </div>
                </form>
            </div>
        )
    }

}
export default withRouter(SignInComponent);