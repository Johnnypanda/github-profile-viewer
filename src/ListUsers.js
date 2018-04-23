import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class ListUsers extends Component {

	render(){
		  return (
		  	<div className="container">
		      	<div className="form-area">
			        <form onSubmit={this.props.getUserList}>
			          <input
			            type="text"
			            name="user"
			            placeholder="Type in a Github username..."
			          />
			          <button> Search </button>
			        </form>
		        </div>
		  		<ul className="list-users">
		     	   {this.props.users.map((user) => (
				          <li key={user.id}>
				            {user.login}
				            <img src={user.avatar_url} style={{maxWidth: '100px'}}/>
 						    <Link to="/view"
				          	 className ="view-user"
				          	 onSubmit={this.props.viewUserInfo}>
				          	View Profile
				          	</Link>
				          </li>
				       ))}

		  		</ul>
		  	</div>
  	);
  }
}

export default ListUsers