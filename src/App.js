import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import ListUsers from './components/ListUsers'
import ViewUser from './components/ViewUser'
import './index.css'


class App extends Component {
	state = {
		users: [],
		currentUser: undefined,
		url: undefined,
		bio: '',
		followers: '',
		following: '',
		update: ''
	}

	viewUser = (e) => {
		let selected = e.target.id;
		this.setState({
			currentUser: selected
				}, () => {
				console.log(this.state.currentUser);
				this.renderNewUser();
			})
	}

	getUserList = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		const api_call = await fetch(`https://api.github.com/search/users?q=${user}`);
		const data = await api_call.json();
		if(user){
			this.setState({
				users: data.items
			});
		}
	}

	renderNewUser = async (e) => {
		let newUser = this.state.currentUser;
		const userApi = await fetch(`https://api.github.com/users/${newUser}`);
		const userData = await userApi.json();
		const jsonDate = new Date(userData.updated_at);
		const lastUpdate = jsonDate.toString().replace(/GMT.+/, "");
		this.setState({
			bio: userData.bio,
			followers: userData.followers,
			following: userData.following,
			update: lastUpdate
		})
	}

  	render() {
	    return (
		      <div className="App">

  		              <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => (
  		              	<ListUsers getUserList={this.getUserList}
			  		               viewUser={this.viewUser}
			  		               users={this.state.users}
			  		               currentUser={this.state.currentUser}
			  		               renderNewUser={this.renderNewUser}
  		              	/>
		              )}/>

  		              <Route path={`${process.env.PUBLIC_URL}/view`} render={() => (
						<ViewUser currentUser={this.state.currentUser}
								  renderNewUser={this.renderNewUser}
								  viewUser={this.viewUser}
								  users={this.state.users}
								  bio={this.state.bio}
								  followers={this.state.followers}
								  following={this.state.following}
								  update={this.state.update} />

					  )}/>
		      </div>
	    )
  }
}

export default App
