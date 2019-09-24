import React from "react";
import styled from 'styled-components'
import Children from './Children/Children'
import RecentMealsAllChildren from './RecentMealsAllChildren/RecentMealsAllChildren'
import Navigation from './Layout/Navigation'

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    height: 75vh;
`

export default function Dashboard() {
  return (
    <>
    <Navigation />
    <MainContent>
      <Children />
      <RecentMealsAllChildren />
    </MainContent>
    </>
  );
}