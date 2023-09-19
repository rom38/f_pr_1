import { Component, Fragment, useState, useId } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/TownSelect.css";
import towns from "../data/towns.json";

function TownSelect(props) {
    towns.sort(function(a,b) {return (a["city"] > b["city"]) ? 1 : ((b["city"] > a["city"]) ? -1 : 0);} );
    const townsIdDict = {};
    towns.map((item)=>{return townsIdDict[item["fias_id"]]=item;});
    const [coords, setCoords] = useState([52,52]);
    const [townSelected, setTownSelected] = useState(townsIdDict["cd4477e8-3335-442a-a0a4-9429a52f5c52"]);
    const defaultTown = "Байкальск";

    const uniqueRegions = [...new Set(towns.map((item) => item["Region"]))];
    const uniqueFederals = [
        ...new Set(towns.map((item) => item["federal_district"])),
    ];
    function onSelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex]);
        const idTownSelected = event.target.options[selectedIndex].id;
        // const townSelected = townsIdDict[idTownSelected];
        setTownSelected(townsIdDict[idTownSelected]);
        console.log("event from input id", idTownSelected);
        console.log("coords", `${townSelected["geo_lat"]} ${townSelected["geo_lon"]}` )
        // console.log("event from input", event.target.value);


    }
    //const [selected, changeSelected] = useState(false);
    return (
        <ul>
            <label className="search-label">Укажите ваш город, в поле работает поиск:</label>
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
            <select name="town-select" id="town-select" onChange={onSelect} value={townSelected["city"]}>
                {towns.map((town) =>
                    <option key={town["fias_id"]} id={town["fias_id"]}>{town["city"]}</option>
                )}
            </select>
            <label>координаты:
                <span>{`${townSelected["geo_lat"]} ${townSelected["geo_lon"]}`}</span>
            </label>

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
