import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchChildren } from '../store/actions'
import Children from './Children/Children'
import RecentMealsAllChildren from './RecentMealsAllChildren/RecentMealsAllChildren'
import Navigation from './Layout/Navigation'
import AddNewKidForm from './Forms/AddKid'

import axiosWithAuth from '../utils/axiosWithAuth'
import * as R from 'ramda'


const MainContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  // padding: .25rem; .5rem;

  @media(max-width: 700px) {
    flex-flow: column nowrap
    align-items: center;
  }

`

export default function Dashboard() {
  const { children } = useSelector(state => ({
    children: state.user.children
  }))

  const dispatch = useDispatch()
  const [shouldFetchChildrenData, setShouldFetchChildrenData] = useState(false)
  const [ meals, setMeals ] = useState([])


  useEffect(() => {
    dispatch(fetchChildren())
  }, [shouldFetchChildrenData])

  useEffect(() => {
    console.log('children length', children.length)
    children.forEach(child => {
        axiosWithAuth()
        .get(`/${child.id}/entries`)
        .then(res => {
            console.log('child entries', res)
            setMeals((prevMeals) => [...prevMeals, ...res.data])
        })
        .catch(console.error)
    })

    return () => setMeals([])
}, [shouldFetchChildrenData, children])


  const fetchMeal = (id) => axiosWithAuth().get(`/entry/${id}`)
  
  return (
    <>
    <Navigation children={children} fetchMeal={fetchMeal} />
    <MainContent>
      <AddNewKidForm triggerChildDataUpdate={setShouldFetchChildrenData} />
      <Children fetchChildData={shouldFetchChildrenData} children={children} />
      <RecentMealsAllChildren children={children} fetchChildData={shouldFetchChildrenData} meals={meals} />
    </MainContent>
    </>
  );
}