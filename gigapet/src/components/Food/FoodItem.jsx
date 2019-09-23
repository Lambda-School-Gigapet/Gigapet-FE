import React from 'react'
import styled from 'styled-components'

//Container div to display data on a single food
const FoodContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

//Food container is returned with data for the specific food from props
export default function FoodItem(props) {
    return (
        <FoodContainer>
            <h3>{props.type}</h3>
            <p>Points: {props.points}</p>
            <p>Category: {props.category}</p>
        </FoodContainer>
    )
}