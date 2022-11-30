import React, { useState } from 'react';
import axios from 'axios';


export default function SearchForm() {

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    // const [category, setCategory] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log('object');
       try {
           let results = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
               headers: {
                Authorization: 'placeholder'
            }
        })
        console.log(results)
       } catch (error) {
        console.log(error)
       }
    }



    return <>
        <form onSubmit={(e)=>{handleSearch(e)}}>
            
            <h3>Search term</h3><input type="text" value={term} required onChange={(e)=>{setTerm(e.target.value)}}/>
            <h3>Location</h3><input type="text" value={location} required onChange={(e)=>{setLocation(e.target.value)}}/>
            <button type="submit">Submit</button>
    </form>
    </>
}
