import React from 'react';

const BusinessMap extends React.Component {
  componentDidMount () {
    const mapDOMNode = this.refs.map;
    const mapParams = { center: {lat: 37.7758, lng: -122.435}, zoom: 13 }};
    const this.map = new google.maps.Map(mapDOMNode, mapParams);
    const this.markers = [];
  };

  updateMapParams () {

  };

  updateMarkers () {
    this.markers.forEach(marker, () => {
      this.mapMarker = new google.maps.Marker(position: marker, title: "New marker");
    });
  };

  render () {
    <div id="map-container" ref="map">{this.map}</div>
  }
}
