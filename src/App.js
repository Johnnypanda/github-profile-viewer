import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import ListUsers from './ListUsers'
import ViewUser from './ViewUser'
import './index.css'

const clientID = 'Iv1.c2e909d24dda441f',
	  clientSecret ='c44b9901acf89d00e55a61901f9edcca4940f511';

class App extends Component {
 constructor(props){
 	super(props);
	 	this.state = {	users: [],
		currentUser: 'Johnnypanda',
		url: '',
		error: ''
	}
	this.viewUser.bind(this);
 }

 viewUser = () => {
 	console.log(this)
 }



	getUserList = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		// const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${clientID}&client_secret=${clientSecret}`);
		const api_call = await fetch(`https://api.github.com/search/users?q=${user}`);
		const data = await api_call.json(); //converts API call to JSON
		if(user){
			console.log(data);
			this.setState({
				users: data.items,
				error: ''
			});
		}
	}


  	render() {
	    return (
		      <div className="App">

  		              <Route exact path="/" render={() => (
  		              	<ListUsers getUserList={this.getUserList} viewUser={this.viewUser} users={this.state.users} />
		              )}/>

  		              <Route path="/view" render={() => (
						<ViewUser user={this.state.currentUser} />
					  )}/>
		      </div>
	    )
  }
}

export default App
