import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Child from './Child'

//Helper util to request data with auth token of user
import axiosWithAuth from '../../utils/axiosWithAuth';
import mockData from './mockdata'

//Container div to show all children for user
const ChildrenContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
`
const CardContainer = styled.div`
    width: 100%;
    margin: 1em 0;
`

//Children container is returned with all data for each child the user has access to
export default function Children(props) {
    if (!props.children) {
        return (
            <ChildrenContainer>
                <h2>Your Children: </h2>
                <Card header="Loading..."/>
            </ChildrenContainer>
        )
    } else if (props.children.length === 0) {
        return (
            <ChildrenContainer>
                <h2>Your Children: </h2>
                <Card header="No Kids in your list. Add new Kids"/>
            </ChildrenContainer>
        )
    } else {
        return (
            <ChildrenContainer>
                <h2>Your Children: </h2>
                {props.children.map((child, idx) => (
                    <CardContainer key={idx}>
                        <Link to={`/child-dashboard/${child.id}`}>
                            <Child name={child.name} age={child.age} weight={child.weight} />
                        </Link>
                    </CardContainer>
                ))}
            </ChildrenContainer>
        )
    }
}