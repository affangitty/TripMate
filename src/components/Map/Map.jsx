import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper} from '@mui/material'
import {Typography} from '@mui/material'
import {useMediaQuery} from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import {Rating} from '@mui/material'
import useStyles from "./map_styles"

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className={classes.mapContainer}>
      {coordinates.lat&&coordinates.lng&&
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBsFNjMlimJvwgVSUXR9c0jwR_6j0pxBb8' }}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e)=>{
          setCoordinates({lat:e.center.lat,lng:e.center.lng});
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlined color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))} 
      </GoogleMapReact>}
    </div>
  )
}

export default Map
