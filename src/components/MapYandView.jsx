import { useState, useEffect } from "react";
import { YMaps, Map, Placemark, ZoomControl, withYMaps } from "@pbe/react-yandex-maps";
import CoordWidget from "./CoordWidget";
import "../styles/MapYandView.css";

function MapYandView({ townSelected, placeCoordinates, setPlaceCoordinates }) {
    const defaultState = {
        center: placeCoordinates,
        zoom: 5,

    };
    const [maps, setMaps] = useState(null);
    const [address, setAddress] = useState("");
    // const [placeCoordinates, setPlaceCoordinates] = useState([townSelected["geo_lat"], townSelected["geo_lon"]]);

    const getGeoLocation = (e) => {
        let coord = e.get("target").getCenter();
        console.log("map obj", e.get("target").geoObjects.get(0));
        console.log("map center", coord);
        //e.get("target").geoObjects.get(0).geometry.setCoordinates(coord);

    };

    const changeMapCenter = (e) => {
        let coord = e.get("target").geometry.getCoordinates();
        console.log("coord placemark", coord);
        // e.get("target").getMap().setCenter(coord);
        setPlaceCoordinates(coord);

    };

    const getPlaceMarkCoordinates = (e) => {
        let coord = e.get("target").geometry.getCoordinates();
        console.log("coord placemark", coord);
        let resp = maps.geocode(coord);
        resp.then((res) => {
            setAddress(res.geoObjects.get(0).getAddressLine());
        });

    };

    const onLoad = (map) => {
        setMaps(map);
        let resp = map.geocode(placeCoordinates);
        resp.then((res) => {
            setAddress(res.geoObjects.get(0).getAddressLine());
        });
    };

    return (
        <YMaps query={{ lang: "ru_RU", apikey: "0e953c44-2ab2-4a01-87ac-dced95cbcb4c" }}>
            <div className="App">
                <div><h3 className="search-label">Перемещайте маркер для получения погоды по координатам маркера</h3></div>
                <label className="search-label">Адрес маркера: {address}</label>
                <div>     <label className="search-label">Координаты <br /> маркера:</label>
                    <CoordWidget lat={placeCoordinates[0]} lon={placeCoordinates[1]} /></div>
                <Map width="100%" defaultState={defaultState}
                    onBoundsChange={(ymaps) => getGeoLocation(ymaps)}
                    modules={["geolocation", "geocode"]}
                    onLoad={(ymaps) => onLoad(ymaps)}
                    state={{ center: placeCoordinates, zoom: 5 }}
                >
                    <Placemark geometry={placeCoordinates} options={{ draggable: true }} onDragEnd={(event) => changeMapCenter(event)}
                        onGeometryChange={(event) => getPlaceMarkCoordinates(event)} />
                    <ZoomControl options={{ position: { bottom: 35, right: 10 } }} />
                </Map>
            </div>
        </YMaps>
    );
}

export default MapYandView;
