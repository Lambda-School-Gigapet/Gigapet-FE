import React from 'react'
import styled from 'styled-components'

//Container div to display data on a single meal
const MealContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-top: 2px solid black;
    padding: 5px;
`

//Meal container is returned with data for the specific meal from props
export default function Meal(props) {
    return (
        <MealContainer>
            <h3>{props.date}</h3>
            <p>{props.child}</p>
            <p>{props.category}</p>
            <p>{props.mealType}</p>
            <p>{props.servings}</p>
        </MealContainer>
    )
}