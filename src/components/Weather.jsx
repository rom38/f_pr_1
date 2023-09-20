import { Component, Fragment, useState, useId, useEffect } from "react";
import "../styles/Weather.css";

function Weather({ placeCoordinates, setPlaceCoordinates }) {


    // let lat;
    // let lon;
    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (position) {
            setPlaceCoordinates([position.coords.latitude, position.coords.longitude]);
        });

        console.log("Latitude is:", placeCoordinates[0]);
        console.log("Longitude is:", placeCoordinates[1]);
    }, [placeCoordinates]);


    //const [selected, changeSelected] = useState(false);
    return (
        <>
            <p>текущие координаты браузера</p>
            <p>широта: {placeCoordinates[0]}, долгота: {placeCoordinates[1]}</p>

        </>
    );
};

export default Weather;