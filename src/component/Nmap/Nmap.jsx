import React, { Component } from 'react';

class Nmap extends Component {
    constructor(props) {
        super(props);
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        let height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        /*          
        let map = new window.naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(37.48,126.88),
            size: {width: width * 0.5, height : height * 0.85},
            zoom: 10
        });
        */

        this.state = { centerLat: "37.48", centerLng: "126.88" };
    }

    componentDidMount() {
        console.log(this.state.map)
        /*
        fetch("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=zzvwrjdc4t")
        .then(resp => console.log(resp));
        */
        var map = new window.naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(this.state.centerLat, this.state.centerLng),
            size: {width: this.state.width * 0.5, height : this.state.height * 0.85},
            zoom: 10
        });
        var marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(37.48,126.88),
          map: this.state.map
        });
        
    }

    render() { 
        return (
            <div id="map"></div>
        );
    }
}
 
export default Nmap;