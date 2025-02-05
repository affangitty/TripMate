import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper } from '@mui/material'
import {Typography} from '@mui/material'
import {useMediaQuery} from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import {Rating} from '@mui/material'
import useStyles from "./map_styles"

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = { lat:0, lng:0 };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBsFNjMlimJvwgVSUXR9c0jwR_6j0pxBb8' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  )
}

export default Map
