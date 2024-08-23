import React from "react";
import SHOP_DATA from './SHOP_DATA.js'
import CollectionPreviewComponent from '../../components/CollectionPreview/CollectionPreviewComponent.jsx'

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            products: SHOP_DATA
        }
    }
    
    render(){
        return (
            <div className="shop-page">
                {
                   this.state.products.map(category => <CollectionPreviewComponent data={category} />) 
                }
            </div>
        )
    }
}
export default ShopPage;