import React from 'react';
import SearchForm from './sub-components/SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import ResultItem from './sub-components/ResultItem';
import {Grid} from '@mui/material'



export default function Home() {

    const searchResults = useSelector(state => state.searchResults);

    console.log(searchResults);

    return <>
        <h1>Home</h1>
        <SearchForm />
        {/* <div id="searchResultsDiv"> */}
        <Grid container spacing={4}>
        {searchResults.map((object) => {
            // console.log(object);
            return <Grid key={ object.alias } item xs={4} sm={6}>
            <ResultItem resultObject={object}  />
            </Grid>
        })}
                </Grid>
        {/* </div> */}
    </>
}
