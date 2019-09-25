import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Helper util to request data with auth token of user
import axiosWithAuth from '../../utils/axiosWithAuth';
import Child from './Child'

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

    //Set state of the current children for tracking what to display
    //initializd with a empty array while data loads
    const [ children, setChildren ] = useState(null)
    
    const { userId } = useSelector(state => ({ userId: state.user.id }));

    //Axios request for data on children
    //Dep array tracks if the data for the children has changed
    const { fetchChildData } = props
    useEffect(() => {
        axiosWithAuth()
        //TODO: need endpoint for getting children data
        .get(`/${userId}/kids`)
        .then(res => {
            //Request data on the children and set the state of the list of children to the response data
            setChildren(res.data)
            console.log(res.data)
        }).catch(err => {
            //Log error response to console for now until error handling is decided
            console.log('There was an error getting the children data', err)
        })
        // setTimeout(()=>{
        //     setChildren(mockData)
        // }, 1000)
    }, [userId, fetchChildData])

    if (!children) {
        return (
            <ChildrenContainer>
                <h2>Your Children: </h2>
                <Card header="Loading..."/>
            </ChildrenContainer>
        )
    } else if (children.length === 0) {
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
                {children.map((child, idx) => <CardContainer key={idx}><Link to={`/child-dashboard/${child.id}`}><Child name={child.name} age={child.age} weight={child.weight} /></Link></CardContainer>)}
            </ChildrenContainer>
        )
    }
}