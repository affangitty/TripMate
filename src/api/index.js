import axios from 'axios';

export const getPlacesData = async(type,sw,ne)=>{
    try{
        const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
                method: 'GET',
                url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },             
                headers: {
                  'x-rapidapi-key': '7e3d1ccbd1msh5a492a9d07d8024p156675jsn7a1db965712d',
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
              });

        return data;
    } catch(error){
        console.log(error);
    }
}