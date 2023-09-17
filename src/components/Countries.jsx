import { Component, Fragment, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Country from "./Country";
import "../styles/Countries.css";

function Countries() {
    const [countries, setCountries] = useState([]);
    if (!countries.length) {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            console.log(res);
            setCountries(res.data.slice(1, 7));
        });
    }
    return (
        <Fragment>
            <Table striped bordered hover className={"countries"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <Country key={country.cca3} country={country}></Country>
                    ))}
                </tbody>
            </Table>
            <h1>Hello Countries</h1>
        </Fragment>
    );
}
export default Countries;
