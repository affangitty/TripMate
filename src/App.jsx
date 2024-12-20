import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid2 } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid2 container spacing={3} style={{ width: '100%' }}>
        <Grid2 item xs={12} md={4}>
          <List />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          <Map />
        </Grid2>
      </Grid2>
    </>
  );
};

export default App;
