import React,{ Component } from 'react';
import {CardList} from './component/card-list/Card-list.component'
import SearchBox from './component/search-box/Search-box.component'

import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state ={
            monsters:[],
            searchField:''

        }
    }
    componentWillMount(){

      try {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then( users => this.setState({monsters:users}))

      } catch (error) {
          console.log(error)
      }
    }

    handleChange =(e)=>{
        this.setState({searchField:e.target.value} ) 
    }
    render(){
        const {monsters,searchField} = this.state
        const filteredMonsters = monsters.filter(monster=>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return(
            <div className="App">
                <h1>Monsters Rolodex</h1>
               <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
                
           <CardList monsters ={filteredMonsters} />
         
	 
	   
            </div>
        )
    }
}


export default App;
