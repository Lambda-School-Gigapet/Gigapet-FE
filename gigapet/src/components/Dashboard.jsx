import React from "react";
import styled from 'styled-components'
import Children from './Children/Children'
import RecentMealsAllChildren from './RecentMealsAllChildren/RecentMealsAllChildren'

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    height: 75vh;
`

export default function Dashboard() {
  return (
    <MainContent>
      <Children />
      <RecentMealsAllChildren />
    </MainContent>
  );
}