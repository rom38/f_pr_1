import { useState } from "react";
import { YMaps, Map, Placemark, ZoomControl, withYMaps } from "@pbe/react-yandex-maps";

function MapYandView({ townSelected }) {
    const defaultState = {
        center: [52.751574, 102.573856],
        zoom: 5,

    };
    const [maps, setMaps] = useState(null);
    const [address, setAddress] = useState("");
    const [placeMarkCoordinates, setPlaceMarkCoordinates] = useState([townSelected["geo_lat"], townSelected["geo_lon"]]);

    const getGeoLocation = (e) => {
        let coord = e.get("target").getCenter();
        console.log("map center", coord);

        let resp = maps.geocode(coord);
        resp.then((res) => {
            setAddress(res.geoObjects.get(0).getAddressLine());
        });
    };

    const getPlaceMarkCoordinates = (e) => {
        let coord = e.get("target").geometry.getCoordinates();
        console.log("coord placemark", coord);

    };

    const onLoad = (map) => {
        setMaps(map);
    };

    return (
        <YMaps query={{ lang: "ru_RU", apikey: "0e953c44-2ab2-4a01-87ac-dced95cbcb4c" }}>
            <div className="App">
                <Map width="100%" defaultState={defaultState}
                    onBoundsChange={(ymaps) => getGeoLocation(ymaps)}
                    modules={["geolocation", "geocode"]}
                    onLoad={(ymaps) => onLoad(ymaps)}>
                    <Placemark geometry={placeMarkCoordinates} options={{ draggable: true }} onDragEnd={(event) => getPlaceMarkCoordinates(event)} />
                    <ZoomControl options={{ position: { bottom: 35, right: 10 } }} />
                </Map>
            </div>
            <p>ggbdfdfdf {address}</p>
        </YMaps>
    );
}

export default MapYandView;
