import { Component, Fragment, useState } from "react";
import { render } from "react-dom";
import { Button } from "react-bootstrap";
import PropTypes, { array, object } from "prop-types";
import "../styles/Country.css";

function Country(props) {
    const [selected, changeSelected] = useState(false);
    return (
        <tr className={selected ? "selected-country" : ""}>
            <td className={selected ? "selected-country" : ""}>
                {props.country.name.common}
            </td>
            <td className={selected ? "selected-country" : ""}>
                {props.country.capital}
            </td>
            <td>
                {selected ? (
                    <Button
                        variant="danger"
                        onClick={() => changeSelected(false)}
                    >
                        remove
                    </Button>
                ) : (
                    <Button
                        variant="success"
                        onClick={() => changeSelected(true)}
                    >
                        add
                    </Button>
                )}
            </td>
        </tr>
    );
}

// Country.propTypes = {
//     country: PropTypes.object
// };
export default Country;
