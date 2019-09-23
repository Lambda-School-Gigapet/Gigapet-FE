import React from "react";
import styled from 'styled-components'

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 75vh;
`

export default function Dashboard() {
  return (
    <MainContent>
      <h3>main content will go here</h3>
    </MainContent>
  );
}