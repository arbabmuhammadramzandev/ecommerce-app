import React from "react";
import SHOP_DATA from './SHOP_DATA.js'

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            products: SHOP_DATA
        }
    }
    render(){
        return (
            <div>
                {
                   this.state.products.map(category => {
                   return (
                   <> <h1>{category.title}</h1>
                    {category.items.map(item => <p>{item.name}</p>)}</>
                   )
                   }) 
                }
            </div>
        )
    }
}
export default ShopPage;