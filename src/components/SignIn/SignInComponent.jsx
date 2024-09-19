import React,{useContext} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButtonComponent';
import FormInput from '../FormInput/FormInputComponent';
import {AuthContext} from '../../context/contextApi'
import './signin.scss';
import StyledButton from '../StyledButton';

const SignInComponent = (props) => {
   

   
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })
    const {setCurrentUser} = useContext(AuthContext);
const  handleSubmit = async(event) => {
    event.preventDefault();
    try{
        const emailInput = user.email;
        const passwordInput = user.password;
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
            setCurrentUser(data);
            props.history.push('/')
        }
    }catch(err){
        console.log("Error: " + err);

    }
    setUser({
        email: '',
        password: ''
    })
}
    const handleChange = (event) => {
        const {name, value} = event.target
        setUser({
            ...user,
            [name] : value
        })
    }

    return (
        <div className='sign-in'>
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password</span>
        <StyledButton>Styled Component Button</StyledButton>
        <form onSubmit={handleSubmit}>
            
            <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={user.email}
            label="Email"
            required
            />
            <FormInput
            name="password"
            type="password"
            handleChange={handleChange}
            value={user.password}
            label="Password"
            required
            />
         <div className='buttons'>
         <CustomButton type='submit'> Sign In </CustomButton>
         {/* <CustomButton onClick={this.handleGoogleSignin} isGoogleSignIn> Sign In With Google </CustomButton> */}
         </div>
        </form>
    </div>
    )
}


export default withRouter(SignInComponent);