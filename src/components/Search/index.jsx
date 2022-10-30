// Contains a form with the input element and the search button
// Also contains functions that handle the input element and resets the field
// and also contains a function that calls the search function which is passed as props to it

/* "useState" it lets us add React state to function components
Accepts one argument (the initial state) and returns an array containing the current state
(equivalent to this.state) and a function to update it (equivalent to this.setState ) */

import React from "react";
import search from '../../assets/Images/search.png';

const Search = props => {
    return (
        <form className='search'>
            <img src={search} style={{ width: "28px", height: "26px", marginRight: "14px" }} alt="" />
        </form>
    );
};

export default Search;