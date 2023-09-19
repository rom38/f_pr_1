import { useState } from "react";
import { Fragment } from "react";
import "../styles/PlaceSelect.css";
import TownSelect from "./TownSelect";
import RegionSelect from "./RegionSelect";
import towns_orig from "../data/towns.json";

function PlaceSelect({ townSelected, setTownSelected }) {
    towns_orig.sort(function (a, b) { return (a["city"] > b["city"]) ? 1 : ((b["city"] > a["city"]) ? -1 : 0); });
    const townsIdDict = {};
    towns_orig.map((item) => { return townsIdDict[item["fias_id"]] = item; });
    const [coords, setCoords] = useState([52, 52]);
    const [towns, setTowns] = useState(towns_orig);
    // const [townSelected, setTownSelected] = useState(townsIdDict["cd4477e8-3335-442a-a0a4-9429a52f5c52"]);
    // setTownSelected(townsIdDict["cd4477e8-3335-442a-a0a4-9429a52f5c52"]);
    const [regionSelected, setRegionSelected] = useState("Все регионы");
    const defaultTown = "Байкальск";
    function updateRegion(region) {
        setTowns(towns_orig.filter((item) => item["region"] == region));
        if (region == "Все регионы") { setTowns(towns_orig); }
        setRegionSelected(region);
        console.log("update region", region);
        console.log("update towns", towns);



    }

    return (
        <>
            <RegionSelect regionSelected={regionSelected} updateRegion={updateRegion} />
            <TownSelect towns={towns}
                townSelected={townSelected}
                setTownSelected={setTownSelected}
            />

        </>
    );
}

export default PlaceSelect;
