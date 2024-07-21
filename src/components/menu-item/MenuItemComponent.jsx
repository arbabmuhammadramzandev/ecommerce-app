import React from 'react';
import {withRouter} from 'react-router-dom';
import './MenuItem.scss';

const MenuItemComponent = (props) => {
        return (
            
    props.menuitems.map(menuitem => 
                    <div className='menu-item' onClick={() => props.history.push(`${menuitem.url}`)}>
                        <div className='background-image' style={{
                            backgroundImage: `url(${menuitem.imageUrl})`
                        }} />
                        <div className='content'>
                            <div className='title'>{menuitem.title.toUpperCase()}</div>
                            <span className='subtitle'>{menuitem.subtitle.toUpperCase()}</span>
                        </div>
                    </div>
                 )
        )
}

export default withRouter(MenuItemComponent) ;
