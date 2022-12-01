import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function SearchForm() {

    const searchResults = useSelector(state => state.searchResults);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(searchResults)
    })

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    // const [category, setCategory] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log('object');
        try {
            let results = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
                headers: {
                    Authorization: process.env.REACT_APP_APIKEY
                }
            })
            //check this dispatch ----------
            console.log(results.data.businesses)
            dispatch((searchResults(results.data.businesses)))
        
        } catch (error) {
            console.log(error)
        }
    };



    return <>
        <form onSubmit={(e)=>{handleSearch(e)}}>
            
            <h3>Search term</h3><input type="text" value={term} required onChange={(e)=>{setTerm(e.target.value)}}/>
            <h3>Location</h3><input type="text" value={location} required onChange={(e)=>{setLocation(e.target.value)}}/>
            <button type="submit">Submit</button>
    </form>
    </>
}
