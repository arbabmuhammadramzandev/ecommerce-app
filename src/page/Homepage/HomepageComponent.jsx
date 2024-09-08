import React,{ useContext }  from 'react';
import './Homepage.scss'
import DirectoryComponent from '../../components/Directory/DirectoryComponent.jsx';
import { AuthContext } from '../../context/contextApi.js';

class HomepageComponent extends React.Component{
    constructor() {
        super();

        this.state = {
            menuItems: null
            
        }
    }
    componentDidMount(){
       this.GetAllCategories()
    }
    GetAllCategories = async() => {
        const resposenFromApi =  await fetch("http://localhost:8080/api/v1/category", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        const categories = await resposenFromApi.json()
        this.setState({
            menuItems: categories
        })
    }
    render () {
        // const values = useContext(AuthContext);
        // console.log("values",values)
        return (
            <div className="homepage">
                
           {this.state.menuItems ? <DirectoryComponent menuitems = {this.state.menuItems}  />  : null} 
            </div>
            )
    }
}
export default HomepageComponent;
