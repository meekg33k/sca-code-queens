import React from 'react'
import PropTypes from "prop-types";
import "./SearchBox.css"

import Button from "../Button"

const SearchBox = ({onSearch, buttonTitle}) =>{

	const handleSubmit = (e) =>{
		e.preventDefault()
		const searchInput = document.getElementById("box")	;
		onSearch(searchInput.value);
		searchInput.value = "";
	}
	let button = ()=>{
		if(buttonTitle){
			return <Button title={buttonTitle} onClick={handleSubmit}/>
		}
	}
	return(
		<form className="search" onSubmit={handleSubmit}>
			<input className="searchBox" id="box" type='text' placeholder='&#xf002; what event are you searching for &#x3f;'/>
			{/* could be better */}
			{button()}
		</form>
	)
}

SearchBox.propTypes = {
  onSearch: PropTypes.func,
};	
export default SearchBox