import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './list_styles.js';

const List=({places,childClicked,type,setType,rating,setRating})=>{
  const classes=useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" style={{marginBottom:"25px"}}>Restraunts, Hotels & Attractions around you</Typography>
      <div style={{marginBottom:"40px"}}>
        <FormControl className={classes.formControl} style={{marginRight:"10px"}}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restraunts</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
        </div>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
