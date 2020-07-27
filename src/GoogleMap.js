import React, { Component } from 'react';
import './GoogleMap.css';


export default class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div ref="map" id="map" />
                </div>
            </div>
        );
    }

}