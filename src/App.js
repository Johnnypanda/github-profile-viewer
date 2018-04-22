import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import SearchScreen from './SearchScreen'
import './index.css'

const clientID = 'Iv1.c2e909d24dda441f',
	  clientSecret ='c44b9901acf89d00e55a61901f9edcca4940f511';

class App extends Component {

state = {
	login: undefined,
	name: undefined,
	error: undefined
}

	getUserList = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${clientID}&client_secret=${clientSecret}`);
		const data = await api_call.json(); //converts API call to JSON
		console.log(data);

		this.setState({
			login: data.login,
			name: data.name
			error: ""
		});
	}
  	render() {
    return (
	      <div className="App">
	        <SearchScreen getUserList={this.getUserList} />
	      </div>
    )
  }
}

export default App
