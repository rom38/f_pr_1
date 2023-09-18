import { Component } from "react";
import "../styles/Main.css";
import Countries from "./Countries";
import Alerts from "./Alerts";
import TownSelect from "./TownSelect";
import RegionSelect from "./RegionSelect";

function Main() {
    const alertText = "Ужас!";
    return (
        <main>
            <h1>Hello World</h1>
            <Alerts>{alertText}</Alerts>
            <TownSelect/>
            <RegionSelect/>

            <Countries />
        </main>
    );
}

export default Main;
