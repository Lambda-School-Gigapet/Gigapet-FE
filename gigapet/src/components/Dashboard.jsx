import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchChildren } from '../store/actions'
import Children from './Children/Children'
import RecentMealsAllChildren from './RecentMealsAllChildren/RecentMealsAllChildren'
import Navigation from './Layout/Navigation'
import AddNewKidForm from './Forms/AddKid'

import axiosWithAuth from '../utils/axiosWithAuth'


const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 50px;
`

export default function Dashboard() {
  const { children } = useSelector(state => ({
    children: state.user.children
  }))

  const dispatch = useDispatch()
  const [shouldFetchChildrenData, setShouldFetchChildrenData] = useState(false)

  useEffect(() => {
    dispatch(fetchChildren())
  }, [shouldFetchChildrenData])

  const fetchMeal = (id) => axiosWithAuth().get(`/entry/${id}`)
  
  return (
    <>
    <Navigation children={children} fetchMeal={fetchMeal} />
    <MainContent>
      <AddNewKidForm triggerChildDataUpdate={setShouldFetchChildrenData} />
      <Children fetchChildData={shouldFetchChildrenData} children={children} />
      <RecentMealsAllChildren children={children} fetchChildData={shouldFetchChildrenData} />
    </MainContent>
    </>
  );
}