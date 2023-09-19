import { useState } from "react";
import "../styles/Main.css";
import Countries from "./Countries";
import Alerts from "./Alerts";
import PlaceSelect from "./PlaceSelect";

function Main() {
    const alertText = "Ужас!";
    const defaultTown =   {
        "federal_district": "Сибирский",
        "region": "Иркутская",
        "city": "Байкальск",
        "fias_id": "cd4477e8-3335-442a-a0a4-9429a52f5c52",
        "geo_lat": 51.5230393,
        "geo_lon": 104.1487532
      };
    const [townSelected, setTownSelected] = useState(defaultTown);
    return (
        <main>
            <h1>Hello World</h1>
            <Alerts>{alertText}</Alerts>
            <PlaceSelect townSelected={townSelected} setTownSelected={setTownSelected}/>
            {/* <Countries /> */}
        </main>
    );
}

export default Main;
