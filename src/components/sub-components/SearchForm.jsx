import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { storeResults } from '../../actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'




export default function SearchForm() {

    const searchResults = useSelector(state => state.searchResults);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(searchResults)
    // })

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    // const [category, setCategory] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
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
        setLocation('');
        setTerm('');
    };

    useEffect(() => {
        console.log(searchResults)

})

    return <>
        <form onSubmit={(e)=>{handleSearch(e)}}>
       
            <TextField id="outlined-basic" value={term} required onChange={(e) => { setTerm(e.target.value) }} label="Search" variant="outlined" />
            <TextField id="outlined-basic" value={location} required onChange={(e) => { setLocation(e.target.value) }} label="City or State" variant="outlined" />
            <Button type='submit' variant="contained">Hello World</Button>
        </form>
    </>
}
