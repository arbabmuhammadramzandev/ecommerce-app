import React from 'react';
import {withRouter} from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButtonComponent';

class SignInComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.email === "helloamramzan@gmail.com"){
            this.props.history.push('/shop')
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
            <div className='sing-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" value={this.state.email} onChange={this.handleChange} />
                    <input name="password" value={this.state.password} onChange={this.handleChange} />
                    <CustomButton> Sign In </CustomButton>
                </form>
            </div>
        )
    }

}
export default withRouter(SignInComponent);