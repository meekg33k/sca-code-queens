import React from 'react'
import PropTypes from "prop-types";
import "./SearchBox.css"

import Button from "../Button"

const SearchBox = ({onSearch}) =>{

	const handleSubmit = (e) =>{
		e.preventDefault()
		const searchInput = document.getElementById("box");
		onSearch(searchInput.value);
		searchInput.value = "";
}
	return(
		<form className="search" onSubmit={handleSubmit}>
			<input className="searchBox" id="box" type='text' placeholder='&#xf002; what event are you searching for?'/>
			<Button title={"search"} onClick={handleSubmit}/>
		</form>
	)
}

SearchBox.propTypes = {
  onSearch: PropTypes.func,
};	
export default SearchBox