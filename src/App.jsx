import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getPlacesData } from './api';

const theme = createTheme();

const App = () => {
  const [places,setPlaces]=useState([]);
  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds]=useState({});
  const [childClicked,setChildClicked]=useState(null);
  const [type,setType]=useState('restaurants');
  const [rating,setRating]=useState(0);
  const [filteredPlaces,setFilteredPlaces]=useState([]);

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
      getPlacesData(type,bounds.sw,bounds.ne).then((data)=>{
        setFilteredPlaces([]);
        setPlaces(data);
      });
    }
  },[type,coordinates,bounds]);
  return (
    <>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List 
              places={filteredPlaces.length?filteredPlaces:places}
              childClicked={childClicked}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
          /> 
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
             setCoordinates={setCoordinates}
             setBounds={setBounds}
             coordinates={coordinates}
             places={filteredPlaces.length?filteredPlaces:places}
             setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
     </ThemeProvider>
    </>
  );
};

export default App;
