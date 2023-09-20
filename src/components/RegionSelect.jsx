import { Component, Fragment, useState, useId } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/RegionSelect.css";
import towns from "../data/towns.json";

function RegionSelect({ regionSelected, updateRegion }) {

    const uniqueRegions = [...new Set(towns.map((item) => item["region"]))];
    uniqueRegions.sort(function (a, b) { return (a > b) ? 1 : ((b > a) ? -1 : 0); });
    // uniqueRegions = ["Все регионы", ...uniqueRegions];
    uniqueRegions.unshift("Все регионы");
    console.log("uniq regions", uniqueRegions);
    const regionSelectId = useId();

    const onSelect = (event) => {
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex]);
        const idRegionSelected = event.target.options[selectedIndex].id;
        updateRegion(idRegionSelected);

        console.log("event from input id", idRegionSelected);
        // console.log("coords", town[idTownSelected]["geo_lat"] )
        // console.log("event from input", event.target.value);


    }
    //const [selected, changeSelected] = useState(false);
    return (
        <>
            <label className="search-label" htmlFor={regionSelectId}>Укажите ваш регион:</label>
            <select name="region-select" id={regionSelectId} onChange={onSelect} value={regionSelected}>
                {uniqueRegions.map((region) => (
                    <option key={region} id={region}>{region}</option>
                ))}
            </select>
        </>
    );
}

// Country.propTypes = {
//     country: PropTypes.object
// };
export default RegionSelect;
