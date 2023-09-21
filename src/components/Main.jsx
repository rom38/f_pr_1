import { useState } from "react";
import "../styles/Main.css";
import PlaceSelect from "./PlaceSelect";
import MapYandView from "./MapYandView";
import Weather from "./Weather";

function Main() {
    const defaultTown = {
        "federal_district": "Сибирский",
        "region": "Иркутская",
        "city": "Байкальск",
        "fias_id": "cd4477e8-3335-442a-a0a4-9429a52f5c52",
        "geo_lat": 51.5230393,
        "geo_lon": 104.1487532
    };
    const [townSelected, setTownSelected] = useState(defaultTown);
    const [placeCoordinates, setPlaceCoordinates] = useState([defaultTown["geo_lat"], defaultTown["geo_lon"]]);
    const townUpdate = (town) => {
        setTownSelected(town);
        setPlaceCoordinates([town["geo_lat"], town["geo_lon"]]);
        console.log("update town", townSelected);
        console.log("update coods", placeCoordinates);
    };

    return (
        <main>
            <PlaceSelect townSelected={townSelected} townUpdate={townUpdate} setPlaceCoordinates={setPlaceCoordinates} />
            <Weather placeCoordinates={placeCoordinates} setPlaceCoordinates={setPlaceCoordinates} />
            <MapYandView placeCoordinates={placeCoordinates} setPlaceCoordinates={setPlaceCoordinates} />
        </main>
    );
}

export default Main;
