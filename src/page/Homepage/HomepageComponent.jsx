import React from 'react';
import './Homepage.scss'
import DirectoryComponent from '../../components/Directory/DirectoryComponent.jsx';

class HomepageComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            menuItems : [
                {
                    id: 1, 
                    title: "hats",
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    subtitle: "shop now",
                    url: "/hats",
                    products: [
                        {
                            title: "HAT 1"
                        },
                        {
                            title: "HAT 2"
                        },

                    ]
                },
                {
                    id: 2, 
                    title: "jackets",
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    url: "/jackets",
                    subtitle: "shop now",
                    products: [
                        {
                            title: "JACKET 1"
                        },
                        {
                            title: "JACKET 2"
                        },

                    ]
                },
                {
                    id: 3, 
                    title: "sneakers",
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    url: "/sneakers",

                    subtitle: "shop now",
                    products: [
                        {
                            title: "SNEAKER 1"
                        },
                        {
                            title: "SNEAKER 2"
                        },

                    ]
                },
                {
                    id: 4, 
                    title: "womens",
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    url: "/womens",

                    subtitle: "shop now",
                    products: [
                        {
                            title: "WOMEN 1"
                        },
                        {
                            title: "WOMEN 2"
                        },

                    ]
                },
                {
                    id: 5, 
                    title: "mens",
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    url: "/mens",

                    subtitle: "shop now",
                    products: [
                        {
                            title: "MEN 1"
                        },
                        {
                            title: "MEN 2"
                        },

                    ]
                }
            ]
            
        }
    }
    render () {
        return (
            <div className="homepage">
                
            <DirectoryComponent menuitems = {this.state.menuItems}  />
            </div>
            )
    }
}
export default HomepageComponent;
