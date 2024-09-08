import React,{createContext, useEffect, useState} from 'react';
export const AuthContext = createContext();
class AuthProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser:  JSON.parse(localStorage.getItem('user' ) || null)
            
        }
    }
    render() {
        return(
            <AuthContext.Provider value={this.state.currentUser}>
            {this.props.children}
        </AuthContext.Provider>
        )
       
    }
}

export default AuthProvider;