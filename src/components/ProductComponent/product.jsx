import {withRouter} from 'react-router-dom'
import React from 'react';

class Product extends React.Component{
    constructor() {
        super();        
        this.state = {
            products: [
                {
                    name: "hats",
                    lists: [
                        {
                            title: "HATS 1"
                        },
                        {
                            title: "HATS 2"
                        }
                    ]
                },
                {
                    name: "jackets",
                    lists: [
                        {
                            title: "jackets 1"
                        },
                        {
                            title: "jackets 2"
                        }
                    ]
                },
                {
                    name: "sneakers",
                    lists: [
                        {
                            title: "sneakers 1"
                        },
                        {
                            title: "sneakers 2"
                        }
                    ]
                },
                {
                    name: "womens",
                    lists: [
                        {
                            title: "womens 1"
                        },
                        {
                            title: "womens 2"
                        }
                    ]
                },
                {
                    name: "mens",
                    lists: [
                        {
                            title: "mens 1"
                        },
                        {
                            title: "mens 2"
                        }
                    ]
                },
            ]
              
        }
    }
    render () {
        const pathNameFilter = this.props.location.pathname.replace("/", "");
        const filterProduct = this.state.products.filter(product => product.name === pathNameFilter)
        return (
            <div>
                <h1>{filterProduct[0]?.name.toUpperCase()}</h1>
                {
                    filterProduct[0]?.lists.map(item => <p>{item.title}</p>)
                }
            </div>
            
            )
    }
}
export default withRouter(Product);
