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
		currentUser: undefined,
		url: undefined,
		userData: [],
		error: ''
	}

	viewUser = (e) => {
		this.setState({currentUser: e.target.id})
	}

	getUserList = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		const api_call = await fetch(`https://api.github.com/search/users?q=${user}`);
		const data = await api_call.json();

		if(user){
			console.log(data);
			console.log(this.props.userData);
			this.setState({
				users: data.items
			});
		}
	}

  	render() {
	    return (
		      <div className="App">

  		              <Route exact path="/" render={() => (
  		              	<ListUsers getUserList={this.getUserList}
			  		               viewUser={this.viewUser}
			  		               users={this.state.users}
			  		               currentUser={this.state.currentUser}
  		              	/>
		              )}/>

  		              <Route path="/view" render={() => (
						<ViewUser currentUser={this.state.currentUser}
								  users={this.state.users} />
					  )}/>
		      </div>
	    )
  }
}

export default App
