import React from 'react';
import './Directory.scss';
import MenuItemComponent from  '../menu-item/MenuItemComponent';


const DirectoryComponent = (props) => {
    return (
        <div className='directory-menu'>
            <MenuItemComponent menuitems ={props.menuitems} />
    </div>
    )
}

export default DirectoryComponent;