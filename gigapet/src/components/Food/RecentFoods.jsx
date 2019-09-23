import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


//Helper util to request data with auth token of user
import axiosWithAuth from '../../utils/axiosWithAuth'
import FoodItem from './FoodItem'

//Container div to show all food for child
const FoodContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
//Food container is returned with all data for each food the child has eaten
export default function RecentFoods(props) {

    //Set state of the current food items for tracking what to display
    //initializd with a empty array while data loads
    const [ foods, setFoods ] = useState([])

    //Axios request for data on food items
    //Expecting it is returned in order of most recent first
    //Dep array tracks if the data for the food has changed
    useEffect(() => {
        axiosWithAuth()
        //TODO: need endpoint for getting food data
        .get('')
        .then(res => {
            //Request data on the food items and set the state of the list of food items to the response data
            setFoods(res.data)
        }).catch(err => {
            //Log error response to console for now until error handling is decided
            console.log('There was an error getting the food data', err)
        })
    }, [foods])

    return (
        <>
            <h2>Recent foods: </h2>
            <FoodContainer>
                {foods.map(food => <FoodItem type={food.type} points={food.points} />)}
            </FoodContainer>
        </>
    )
}