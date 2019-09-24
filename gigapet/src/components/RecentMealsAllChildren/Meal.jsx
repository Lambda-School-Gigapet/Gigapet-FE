import React from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

//Container div to display data on a single meal
// const MealContainer = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-content: center;
//     border-top: 2px solid black;
//     padding: 5px;
// `

//Meal container is returned with data for the specific meal from props
export default function Meal(props) {

    const des = `Category: ${props.category} Meal: ${props.mealType} Servings: ${props.servings}`

    return (
        <Card header={props.date} meta={props.child} description={des}/>
    )
}