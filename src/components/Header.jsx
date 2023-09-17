//import React, { Component } from "react";
import React, { useState } from "react";
import "../styles/Header.css";

function Header(props) {
    //console.log(props);
    //let buttonName = props.buttonName//"Some button";
    let [count, setNewCount] = useState(0);
    const handleClick = () => {
        setNewCount(count + 1);
        console.log("hello hello hello", count);
    };

    return (
        <header>
            This is header
            <button className={"some-button"} onClick={handleClick}>
                {props.buttonName} clicked: {count} times
            </button>
        </header>
    );
}

export default Header;
