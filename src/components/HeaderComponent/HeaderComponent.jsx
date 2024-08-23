import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import {logOut} from '../../firebase/firebase.js'
import './HeaderStyles.scss';

const Header = ({currentUser,handleLogout}) => {
    return(
        <div className='header'>
            <Link className="option" to="/">
            <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className="option" to="/shop">SHOP</Link>
                {
                    currentUser ? <div className='option' onClick={handleLogout}>SIGN OUT</div> :<Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}
export default Header;