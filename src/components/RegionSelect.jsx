import { Component, Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/RegionSelect.css";
import towns from "../data/towns.json";

function RegionSelect(props) {
    towns.sort(function(a,b) {return (a["city"] > b["city"]) ? 1 : ((b["city"] > a["city"]) ? -1 : 0);} );
    //[coords, setCoords] = useState([]);
    const defaultTown = "Москва";

    const uniqueRegions = [...new Set(towns.map((item) => item["region"]))];
    uniqueRegions.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} );
    console.log("uniq regions", uniqueRegions);

    function onSelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex]);
        const idTownSelected = event.target.options[selectedIndex].id;
        console.log("event from input id", idTownSelected);
        // console.log("coords", town[idTownSelected]["geo_lat"] )
        // console.log("event from input", event.target.value);


    }
    //const [selected, changeSelected] = useState(false);
    return (
        <ul>
            <label className="search-label">Укажите ваш регион:</label>
            {/* <input
                list="towns"
                name="townsChoice"
                placeholder="Город"
                onChange={onSelect}
                defaultValue={defaultTown}
            />
            <datalist id="towns">
                {towns.map((town) => (
                    <option key={town["fias_id"]} value={town["city"]}></option>
                ))}
            </datalist> */}
            <select name="region-select" id="region-select" onChange={onSelect}>
                {uniqueRegions.map((region) => (
                    <option key={region} id={region}>{region}</option>
                ))}
            </select>
            <label>координаты</label>


        </ul>
    );
}

// Country.propTypes = {
//     country: PropTypes.object
// };
export default RegionSelect;
