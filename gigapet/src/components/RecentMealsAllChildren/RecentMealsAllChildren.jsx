// TODO: render name of dish on recent meals section

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

//Helper util to request data with auth token of user
import axiosWithAuth from '../../utils/axiosWithAuth';
import Meal from './Meal'
import mockData from './mockdata'

//Container div to show recent meals of all children
const MealContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`
//Meal container is returned with all data for each recent meal of all children the user is tracking
export default function RecentMealsAllChildren(props) {

    //Set state of the current meals for tracking what to display
    //initializd with a empty array while data loads
    const [fetching, setFetching] = useState(false)
    // const [childDataFetched, setChildDataFetched] = useState(0)
    const [ meals, setMeals ] = useState([])

    //Axios request for data on meals
    //Dep array tracks if the data for the meals has changed
    const { fetchChildData, children } = props
    useEffect(() => {
        children.forEach(child => {
            axiosWithAuth()
            .get(`/${child.id}/entries`)
            .then(res => {
                setMeals((prevMeals) => [...res.data])
            })
            .catch(console.error)
        })
    }, [fetchChildData, children])

    if (fetching) {
        return (
            <MealContainer>
                <h2>Recent Meals (all children): </h2>
                <Card header="Loading..."/>
            </MealContainer>
        )
    } else if (meals.length === 0) {
        return (
            <MealContainer>
                <h2>Recent Meals (all children): </h2>
                <Card header="There are no meals for your children. Add New meals."/>
            </MealContainer>
        )
    } else {
        return (
            <MealContainer>
                <h2>Recent Meals (all children): </h2>
                {meals.map((meal, idx) => <Meal key={idx} date={meal.date} child={meal.child} category={meal.category} meal={meal.meal} servings={meal.servings}/>)}
            </MealContainer>
        )
    }
}