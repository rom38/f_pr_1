import "../styles/Main.css";
import Countries from "./Countries";
import Alerts from "./Alerts";
import PlaceSelect from "./PlaceSelect";

function Main() {
    const alertText = "Ужас!";
    return (
        <main>
            <h1>Hello World</h1>
            <Alerts>{alertText}</Alerts>
            <PlaceSelect />


            <Countries />
        </main>
    );
}

export default Main;
