import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchScreen extends Component {

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
		      </div>
  	);
  }
}

export default SearchScreen