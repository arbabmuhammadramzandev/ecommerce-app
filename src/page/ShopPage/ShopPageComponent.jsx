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
    GetAllProducts = async() => {
        const getCategories =  await fetch("http://localhost:8080/api/v1/category", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        const categoriesLists = await getCategories.json()

        const getProducts =  await fetch("http://localhost:8080/api/v1/product", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        const productsLists = await getProducts.json()
        const mergedProducts = categoriesLists?.map(category => {
            const productsForCategory = productsLists?.filter(product => product.category === category._id);
            return {
                ...category,
                id: category?.id,
                title: (category?.title).toUpperCase(),
                routeName: category?.url,
                items: productsForCategory,
            }
        })
        this.setState({
            products: mergedProducts
        })
    }
    componentDidMount(){
       this.GetAllProducts()
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