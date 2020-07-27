import PropTypes from "prop-types";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Star from './Star';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputField from "./InputField";
import GoogleMap from "./GoogleMap";
import sum from './sum';

console.log('yo');

const result = sum(5,4);
console.log(result);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Header/>
            <InputField/>
            <GoogleMap/>
            <Button>adsf</Button>
            <Star/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
