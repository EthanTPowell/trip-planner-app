import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import yelp from 'yelp-fusion';
import Button from '@mui/material/Button';




export default function SearchForm() {

    const searchResults = useSelector(state => state.searchResults);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(searchResults)
    // })

    const [term, setTerm] = useState('');
    const [city, setCity] = useState('');
    const [stateName, setStateName] = useState('');
    // const [category, setCategory] = useState('');

    const handleSearch =  (e) => {
        e.preventDefault();
        console.log('object');
        const client = yelp.client(process.env.REACT_APP_APIKEY);

        client.search({
            term: term,
            location: city, stateName,
            limit: 50
        }).then((response)=>{console.log(response);})
    };



    return <>
        <form onSubmit={(e)=>{handleSearch(e)}}>
            
            <h3>Search term</h3><input type="text" value={term} required onChange={(e)=>{setTerm(e.target.value.toLowerCase())}}/>
            <h3>City</h3><input type="text" value={city} required onChange={(e)=>{setCity(e.target.value.toLowerCase())}}/>
            <h3>City</h3><input type="text" value={stateName} required onChange={(e)=>{setStateName(e.target.value.toLowerCase())}}/>
                </form>
    </>
}
