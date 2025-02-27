import React,{useRef} from 'react'
import GoogleMapReact from 'google-map-react'
import useStyles from "./map_styles"
import mapStyles from "./ms";

const Map = ({setCoordinates,setBounds,coordinates}) => {
  const classes = useStyles();
  const mapRef=useRef();
  return (
    <div className={classes.mapContainer}>
      {coordinates.lat&&coordinates.lng&&
      <GoogleMapReact
        ref={mapRef}
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e)=>{
          setCoordinates({lat:e.center.lat,lng:e.center.lng});
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
        }}
      > 
      </GoogleMapReact>}
    </div>
  )
}

export default Map
