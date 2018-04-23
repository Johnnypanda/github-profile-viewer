import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class ViewUser extends Component {

	render(){
		  return (
		  	<div>
		  		<Link className="home" to="/">Back</Link>
		  	   	Chosen user!
		  	</div>
  	);
  }
}

export default ViewUser