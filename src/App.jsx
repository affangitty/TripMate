import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getPlacesData } from './api';
import { LoadScript } from "@react-google-maps/api";

const theme = createTheme();

const App = () => {
  const [places,setPlaces]=useState([]);
  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds]=useState({});
  const [type,setType]=useState('restaurants');
  const [rating,setRating]=useState(0);
  const [filteredPlaces,setFilteredPlaces]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
    })
  },[]);

  useEffect(()=>{
    const filteredPlaces=places.filter((place)=>place.rating>rating);
    setFilteredPlaces(filteredPlaces);
  },[rating]);

  useEffect(()=>{
    if(bounds.sw&&bounds.ne){
      setIsLoading(true);
      getPlacesData(type,bounds.sw,bounds.ne).then((data)=>{
        setPlaces(data?.filter((place)=>place.name&&place.num_reviews>0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  },[type,bounds]);
  return (
    <>
     <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List 
              places={filteredPlaces.length?filteredPlaces:places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              isLoading={isLoading}
              /> 
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
             setCoordinates={setCoordinates}
             setBounds={setBounds}
             coordinates={coordinates}
             places={filteredPlaces.length?filteredPlaces:places}
             />
        </Grid>
      </Grid>
     </ThemeProvider>
    </LoadScript>
    </>
  );
};

export default App;
