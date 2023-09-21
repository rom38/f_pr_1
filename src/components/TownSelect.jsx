import { Component, Fragment, useState, useId } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/TownSelect.css";

function TownSelect({ towns, townSelected, townUpdate }) {
    console.log("towns", towns);
    const townsIdDict = {};
    towns.map((item) => { return townsIdDict[item["fias_id"]] = item; });
    const townSelectId = useId();
    const onSelect = (event) => {
        const selectedIndex = event.target.options.selectedIndex;
        console.log(event.target.options[selectedIndex]);
        const idTownSelected = event.target.options[selectedIndex].id;
        // const townSelected = townsIdDict[idTownSelected];
        townUpdate(townsIdDict[idTownSelected]);
        console.log("event from input id", idTownSelected);
        console.log("coords", `${townSelected["geo_lat"]} ${townSelected["geo_lon"]}`);

    };
    return (
        <>
            <label className="search-label" htmlFor={townSelectId}>Выберете Ваш город:</label>
            <select name="town-select" id={townSelectId} onChange={onSelect} value={townSelected["city"]}>
                {towns.map((town) =>
                    <option key={town["fias_id"]} id={town["fias_id"]}>{town["city"]}</option>
                )}
            </select>
            <label>Координаты города:
                <span>{`Широта: ${townSelected["geo_lat"]}, Долгота: ${townSelected["geo_lon"]}`}</span>
            </label>
        </>
    );
}


export default TownSelect;
