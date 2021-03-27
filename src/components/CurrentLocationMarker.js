import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  LogBox,
} from 'react-native';
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
//import haversine from 'haversine';

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class CurrentLocationMarker extends React.Component {
  constructor(props) {
    super(props);

    let granted = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      granted: granted,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),
    };

    if (this.state.granted) {
      Geolocation.getCurrentPosition(
        position => {
          const {coordinate} = this.state;
          const {routeCoordinates, distanceTravelled} = this.state;
          const {latitude, longitude} = position.coords;

          const newCoordinate = {
            latitude,
            longitude,
          };

          this.setState({
            latitude,
            longitude,
            coordinate: newCoordinate,
          });
        },
        error => console.log(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 10,
        },
      );
    }
  }

  _getLocation = () => {
    let options = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};
    Geolocation.getCurrentPosition(this.success, this.error, options);
  };

  _updateLocation = () => {
    let options = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};
    let watchID = Geolocation.watchPosition(this.success, this.error, options);
    this.setState({watchID});
  };

  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    const {coordinate} = this.state;

    this.watchID = Geolocation.watchPosition(
      position => {
        const {routeCoordinates, distanceTravelled} = this.state;
        const {latitude, longitude} = position.coords;

        const newCoordinate = {
          latitude,
          longitude,
        };

        coordinate.timing(newCoordinate).start();

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          /*
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
           */
          prevLatLng: newCoordinate,
          coordinate: newCoordinate,
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );

    console.log(this.state.coordinate);
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.state.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  /*
  calcDistance = newLatLng => {
    const {prevLatLng} = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };
  */

  render() {
    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showUserLocation
        followUserLocation
        loadingEnabled
        showsCompass={false}
        region={this.getMapRegion()}>
        <Marker.Animated
          ref={marker => {
            this.marker = marker;
          }}
          coordinate={this.state.coordinate}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default CurrentLocationMarker;
