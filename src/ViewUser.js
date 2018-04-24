import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class ViewUser extends Component {

	render(){
		  return (
		  	<div>
		  		 <Link className="home" to="/">Back</Link>
		  	   	 <p>{this.props.currentUser}</p>
		  	   	 <p>User could be there, but you`re playin'</p>
		  	</div>
  	);
  }
}

export default ViewUser