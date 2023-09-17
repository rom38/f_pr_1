import { Component, Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/Country.css";
import towns from "../data/towns.json";

function TownSelect(props) {
    const uniqueRegions = [...new Set(towns.map((item) => item["Регион"]))];
    const uniqueFederals = [
        ...new Set(towns.map((item) => item["Федеральный округ"])),
    ];
    function onSelect(event) {
        //const selectedIndex = event.target.options.selectedIndex;
        //console.log(event.target.options[selectedIndex]);
        console.log("event from input", event.target.key);
    }
    //const [selected, changeSelected] = useState(false);
    return (
        <ul>
            <li>jkfghjksdfsdkjf</li>
            <input
                list="towns"
                name="townsChoice"
                placeholder="Город"
                onChange={onSelect}
            />
            <datalist id="towns">
                {towns.map((town) => (
                    <option key={town["lat"]} value={town["Город"]}></option>
                ))}
            </datalist>
            {towns.map((town) => (
                <li key={town["lat"]}>{town["Город"]}</li>
            ))}
        </ul>
    );
}

// Country.propTypes = {
//     country: PropTypes.object
// };
export default TownSelect;
