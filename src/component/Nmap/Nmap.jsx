import React, {Component} from 'react';

class Nmap extends Component {
    constructor(props) {
        super(props);
        let width = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        let height = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;

        this.state = {
            centerLat: "37.48",
            centerLng: "126.88",
            width: width,
            height: height
        };
    }

    componentDidMount() {
        var map = new window.naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(this.state.centerLat, this.state.centerLng),
            size: {
                width: this.state.width * 0.5,
                height: this.state.height * 0.85
            },
            zoom: 10
        });
        var marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(this.state.centerLat, this.state.centerLng),
            map: this.state.map
        });
    }

    render() {
        return (
            <div id="map" />
        );
    }
}

export default Nmap;