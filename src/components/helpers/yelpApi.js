import { useSelector, useDispatch } from 'react-redux';
import { storeResults } from '../../actions';
import axios from 'axios';


export const queryYelp = async (e) => {
    const dispatch = useDispatch();

    console.log('object');
    try {
        let results = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=50`, {
            headers: {
                Authorization: process.env.REACT_APP_APIKEY
            }
        })
        //check this dispatch ----------
        console.log(results.data.businesses)
        dispatch((storeResults(results.data.businesses)))
    
    } catch (error) {
        console.log(error)
    }
} 