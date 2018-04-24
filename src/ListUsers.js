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
			          <button className="btn"> Search </button>
			        </form>
		        </div>

		  		<ul className="list-users">
		     	   {this.props.users.map((user) => (
				          <li key={user.id}>

					            <p>{user.login}</p>
					            <img src={user.avatar_url} style={{maxWidth: '120px'}}/>
	 						    <Link to="/view"
					          	 className ="view-user"
					          	 id={user.login}
					          	 onClick={this.props.viewUser}
					          	 >
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