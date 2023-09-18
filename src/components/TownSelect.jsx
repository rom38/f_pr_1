import { Component, Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/Country.css";
import towns from "../data/towns.json";

function TownSelect(props) {
    towns.sort(function(a,b) {return (a["city"] > b["city"]) ? 1 : ((b["city"] > a["city"]) ? -1 : 0);} );
    
    const uniqueRegions = [...new Set(towns.map((item) => item["Region"]))];
    const uniqueFederals = [
        ...new Set(towns.map((item) => item["federal_district"])),
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
                    <option key={town["fias_id"]} value={town["city"]}></option>
                ))}
            </datalist>
            {towns.slice(1, 7).map((town) => (
                <li key={town["fias_id"]}>{town["city"]}</li>
            ))}
        </ul>
    );
}

// Country.propTypes = {
//     country: PropTypes.object
// };
export default TownSelect;
