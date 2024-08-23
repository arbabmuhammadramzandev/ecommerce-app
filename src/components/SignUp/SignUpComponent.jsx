import React from 'react';
import {withRouter} from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButtonComponent';
import FormInput from '../FormInput/FormInputComponent';
import './signUp.scss';

class SignUpComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            passwordHash: '',
            username: '',
            phoneNumber: '',
            address: '',
            gender: '',
        }
    }
    handleSubmit = async(event) => {
        event.preventDefault();
        try{

          const resposenFromApi =  await fetch("http://localhost:8080/api/v1/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email : this.state.email,
                    passwordHash: this.state.passwordHash,
                    username: this.state.username,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    gender: this.state.gender,

                })
            })
            console.log("logger", resposenFromApi)
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
            passwordHash: '',
            username: '',
            phoneNumber: '',
            address: '',
            gender: ''
        })
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
                <h2>Dont Have Account</h2>
                <span>Sign up with your email and passwordHash</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput
                    name="username"
                    type="username"
                    handleChange={this.handleChange}
                    value={this.state.username}
                    label="User Name"
                    required
                    />
                    <FormInput
                    name="phoneNumber"
                    type="phoneNumber"
                    handleChange={this.handleChange}
                    value={this.state.phoneNumber}
                    label="Phone Number"
                    required
                    />
                    <FormInput
                    name="address"
                    type="address"
                    handleChange={this.handleChange}
                    value={this.state.address}
                    label="Address"
                    required
                    />
                    <FormInput
                    name="gender"
                    type="gender"
                    handleChange={this.handleChange}
                    value={this.state.gender}
                    label="Gender"
                    required
                    />
                    <FormInput
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label="Email"
                    required
                    />
                    <FormInput
                    name="passwordHash"
                    type="passwordHash"
                    handleChange={this.handleChange}
                    value={this.state.passwordHash}
                    label="Password"
                    required
                    />
                 <div className='buttons'>
                 <CustomButton type='submit'> Sign Up </CustomButton>
                 </div>
                </form>
            </div>
        )
    }

}
export default withRouter(SignUpComponent);