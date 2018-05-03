import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ViewUser extends Component {

	render(){
		  return (
		  	<div className="container">
		  		 <Link className="home" to="/">Back</Link>
		  	   	  {this.props.users.map((user) => ((user.login === this.props.currentUser) ?
		  	   	  				<div className="inner" key={user.id}>
		  	   	  					<p id="selectedUser">{user.login}</p>
		  	   	  					<img src={user.avatar_url} style={{maxWidth: '300px'}}/>
		  	   	  					<p className="user-info"><strong>Bio</strong>: {this.props.bio}</p>
		  	   	  					<p className="user-info"><strong>Last update</strong>: {this.props.update}</p>
		  	   	  					<div className="inner-container">
			  	   	  					<p className="user-info small"><strong>Followers</strong>: {this.props.followers}</p>
			  	   	  					<p className="user-info small"><strong>Following</strong>: {this.props.following}</p>
		  	   	  					</div>
		  	   	  					<a className="view-user" target={"_blank"} href={user.html_url}>Proceed to Github profile</a>
	  	   	  					</div> : ''
				       ))}

		  	</div>
  	);
  }
}

export default ViewUser