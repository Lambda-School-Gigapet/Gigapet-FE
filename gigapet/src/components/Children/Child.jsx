import React from 'react'
import styled from 'styled-components'

//Container div to display data on a single child
const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

//Child container is returned with data for the specific child from props
export function Child(props) {
    return (
        <ChildContainer>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Weight: {props.weight}</p>
        </ChildContainer>
    )
}