import { useState, useEffect, useRef } from "react";
import Day from "./Day";
import "../styles/Weather.css";
import axios from "axios";

function Weather({ placeCoordinates, setPlaceCoordinates }) {
    let first = useRef(true);
    const [weatherData, setWeatherData] = useState([]);
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();


    useEffect(() => {
        if (first.current) {

            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
                //setPlaceCoordinates([lat, lon]);
            });
            first.current = false;
        }
    }, [placeCoordinates]);

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
                console.log("weather", response.data);
                setWeatherData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [placeCoordinates]);

    function updateCoordinates() {
        navigator.geolocation.getCurrentPosition(function (position) {
            setPlaceCoordinates([position.coords.latitude, position.coords.longitude]);
        });

    };
    const dayFromDt = (dt) => new Date(dt * 1000);
    const getWeekDay = (date) => {
        const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
        return days[date.getDay()];
    };

    return (
        <>
            <div>
                <label>Текущие координаты браузера:</label>
                {/* <span>широта: {placeCoordinates[0]}, долгота: {placeCoordinates[1]}</span> */}
                <label>широта: {lat}, долгота: {lon}</label>
                <button onClick={() => updateCoordinates(true)}>
                    Получить и установить <br /> текущие координаты:
                </button>
            </div>
            <div className="weather-items">
                {(typeof weatherData["current"] != "undefined") ? (<>
                    <Day date={"Сегодня"}
                        weather={weatherData["current"]["weather"][0]["description"]} high={weatherData["current"]["high"]} low={13} />
                    {weatherData["daily"].slice(1, 6).map((day) =>
                        <Day key={day["dt"]} date={`${dayFromDt(day["dt"]).toLocaleDateString()}, ${getWeekDay(dayFromDt(day["dt"]))}`}
                            weather={day["weather"][0]["description"]}
                            high={day["temp"]["max"]}
                            low={day["temp"]["min"]} />


                    )}
                </>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}

export default Weather;
