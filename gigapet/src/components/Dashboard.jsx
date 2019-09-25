import React, { useState } from "react";
import styled from 'styled-components'
import Children from './Children/Children'
import RecentMealsAllChildren from './RecentMealsAllChildren/RecentMealsAllChildren'
import Navigation from './Layout/Navigation'
import AddNewKidForm from './Forms/AddKid'

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 50px;
`

export default function Dashboard() {
  const [shouldFetchChildrenData, setShouldFetchChildrenData] = useState(false)
  
  return (
    <>
    <Navigation />
    <MainContent>
      <AddNewKidForm triggerChildDataUpdate={setShouldFetchChildrenData} />
      <Children fetchChildData={shouldFetchChildrenData} />
      <RecentMealsAllChildren />
    </MainContent>
    </>
  );
}