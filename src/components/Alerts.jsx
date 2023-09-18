// import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
function Alerts(props) {
    return (
        <>
            <Alert variant={"danger"}>{props.children}</Alert>
        </>
    );
}

Alerts.propTypes = {
    children: PropTypes.string.isRequired
};
export default Alerts;
