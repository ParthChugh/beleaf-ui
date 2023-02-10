import React, { Component, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import TextField from './textField';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const Location = (props) => {
  const { textFieldProps, getLocation, value, customField, edit, type } = props;
  console.log("edit[type] && !(value?.latitude || customField?.value?.latitude) && (value?.longitude || customField?.value?.longitude)", !((value?.latitude || customField?.value?.latitude) && (value?.longitude || customField?.value?.longitude)))
  useEffect(() => {
    if (edit[type] && !((value?.latitude || customField?.value?.latitude) && (value?.longitude || customField?.value?.longitude))) {
      getLocation()
    }
  }, [])
  console.log('textFieldProps12312312', textFieldProps)

  return (
    <div>
      <TextField
        {...textFieldProps}
      />
      {(value?.latitude || customField?.value?.latitude) && (value?.longitude || customField?.value?.longitude) && (
        <div >
          <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: props.latitude,
              lng: props.longitude,
            }}
            className="map__container"
          >
            <Marker
              onClick={() => {

              }}
              name={'Current Location'}
            />
          </Map>
        </div>
      )}
    </div>

  );

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAll6l-hMWzCutUZGHF4CJcfkcdrjxW8Z4'
})(Location);