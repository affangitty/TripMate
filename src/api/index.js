import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async(sw,ne)=>{
    try{
        const {data:{data}}=await axios.get(URL,{
                method: 'GET',
                url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'x-rapidapi-key': '8ef4c050f4msh6a6786464d3b94cp1861c1jsnceb4b080c6db',
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
              });

        return data;
    } catch(error){
        console.log(error);
    }
}