import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class ViewUser extends Component {
	render(){
		  return (
		  	<div className="container">
		  		 <Link className="home" to="/">Back</Link>
		  	   	  {this.props.users.map((user) => ((user.login === this.props.currentUser) ?
		  	   	  				<div className="inner" key={user.id}>
		  	   	  					{console.log(this.props.user_data)}
		  	   	  					<p>{user.login}</p>
		  	   	  					<img src={user.avatar_url} style={{maxWidth: '300px'}}/>
		  	   	  					<a className="view-user" target={"_blank"} href={user.html_url}>Proceed to Github profile</a>
	  	   	  					</div> : console.log('fail')
				       ))}

		  	</div>
  	);
  }
}

export default ViewUser