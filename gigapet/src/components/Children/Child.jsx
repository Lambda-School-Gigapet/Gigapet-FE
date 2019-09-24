import React from 'react'
import styled from 'styled-components'

//Container div to display data on a single child
const ChildContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

//Child container is returned with data for the specific child from props
export default function Child(props) {
    return (
        <ChildContainer>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Weight: {props.weight}lbs</p>
        </ChildContainer>
    )
}