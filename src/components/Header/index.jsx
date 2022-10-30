import React from "react";
import Search from "../Search/index";
import back from '../../assets/Images/Back.png';

const Header = (props) => {
    return (
        <header className='App-header'>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={back} style={{ width: "28px", height: "26px", marginRight: "14px" }} alt="" />
                <h2>{props.text}</h2>
            </div>
            <Search search={props.search} />
        </header>
    );
};

export default Header;