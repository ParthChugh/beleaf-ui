import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div >
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude,
          }}
          className="map__container"
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAll6l-hMWzCutUZGHF4CJcfkcdrjxW8Z4'
})(Demo1);