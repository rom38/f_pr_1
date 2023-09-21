import "../styles/CoordWidget.css";

const CoordWidget = ({ lat, lon }) => {
    return (
        <div className="coord-widget">
            {((typeof lat != "undefined") & (lon != "undefined")) ? (
                <span>{lat < 0 ? `S${-lat.toFixed(4)}` : `N${lat.toFixed(4)}`}&deg;<br /> {lon < 0 ? `W${-lon.toFixed(4)}` : `E${lon.toFixed(4)}`}&deg;</span>) :
                (<span></span>)}
        </div>
    );
};

export default CoordWidget;
