import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



export default function resultItem() {
    const searchResults = useSelector(state => state.searchResults);

    console.log(searchResults);
    

    return <>
    
    </>
}