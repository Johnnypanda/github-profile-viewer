import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import ListUsers from './ListUsers'
import ViewUser from './ViewUser'
import './index.css'

const clientID = 'Iv1.c2e909d24dda441f',
	  clientSecret ='c44b9901acf89d00e55a61901f9edcca4940f511';

class App extends Component {

state = {
	users: [],
	login: '',
	error: ''
}

	getUserList = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		// const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${clientID}&client_secret=${clientSecret}`);
		const api_call = await fetch(`https://api.github.com/search/users?q=${user}`);
		const data = await api_call.json(); //converts API call to JSON
		console.log(data);

		this.setState({
			users: data.items,
			error: ''
		});
	}

	viewUserInfo = async (e) => {
		const viewedUser = this.state.users[0];
		e.preventDefault();
		const api_call = await fetch(`https://api.github.com/users/${viewedUser}?client_id=${clientID}&client_secret=${clientSecret}`)
		const data = await api_call.json();
		console.log(data);
	}

  	render() {
	    return (
		      <div className="App">

  		              <Route exact path="/" render={() => (
  		              	<ListUsers getUserList={this.getUserList} users={this.state.users} />
		              )}/>

  		              <Route path="/view" render={() => (
						<ViewUser viewUserInfo={this.viewUserInfo} />
					  )}/>
		      </div>
	    )
  }
}

export default App
