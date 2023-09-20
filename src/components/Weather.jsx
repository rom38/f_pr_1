import { Component, Fragment, useState, useId, useEffect, useRef } from "react";
import Day from "./Day";
import "../styles/Weather.css";
import axios from "axios";

function Weather({ placeCoordinates, setPlaceCoordinates }) {
    let first = useRef(true);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        if (first.current) {
            let lat;
            let lon;
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                setPlaceCoordinates([lat, lon]);
            });
            first.current = false;
        }
    }, [placeCoordinates]);


    // let lat;
    // let lon;
    // useEffect(() => {

    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         setPlaceCoordinates([position.coords.latitude, position.coords.longitude]);
    //     });

    //     console.log("Latitude is:", placeCoordinates[0]);
    //     console.log("Longitude is:", placeCoordinates[1]);
    // }, [placeCoordinates]);
    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/3.0/onecall", {
            params: {
                lat: placeCoordinates[0],
                lon: placeCoordinates[1],
                appid: "ef8e553bbb5392d39b02a742616af343",
                exclude: "hourly,minutely",
                lang: "ru",
                units: "metric"
            }
        })
            .then(function (response) {
                // обработка успешного запроса
                console.log("weather", response.data);
                setWeatherData(response.data);
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            });
    }, [placeCoordinates]);

    function updateCoordinates() {
        navigator.geolocation.getCurrentPosition(function (position) {
            setPlaceCoordinates([position.coords.latitude, position.coords.longitude]);
        });

    }



    //const [selected, changeSelected] = useState(false);
    return (
        <>
            <label>Текущие координаты браузера:</label>
            <div><span>широта: {placeCoordinates[0]}, долгота: {placeCoordinates[1]}</span></div>
            <button
                onClick={() => updateCoordinates(true)}
            >
                Получить координаты браузера
            </button>
            {(typeof weatherData["current"] != 'undefined') ? (<>
                <Day date={new Date(weatherData["current"]["dt"] * 1000).toLocaleDateString()}
                    weather={weatherData["current"]["weather"][0]["description"]} high={weatherData["current"]["high"]} low={13} />
                <Day date={new Date(weatherData["daily"][1]["dt"] * 1000).toLocaleDateString()}
                    weather={weatherData["daily"][0]["weather"][0]["description"]} high={weatherData["daily"][0]["temp"]["max"]} low={weatherData["daily"][0]["temp"]["min"]} /></>
            ) : (
                <div></div>
            )}

        </>
    );
}

export default Weather;