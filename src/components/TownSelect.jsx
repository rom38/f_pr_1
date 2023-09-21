import { Component, Fragment, useState, useId } from "react";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import CoordWidget from "./CoordWidget";
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
            <div>
                <label className="search-label">Координаты <br />города: </label>
                <CoordWidget lat={townSelected["geo_lat"]} lon={townSelected["geo_lon"]} />
            </div>
        </>
    );
}


export default TownSelect;
