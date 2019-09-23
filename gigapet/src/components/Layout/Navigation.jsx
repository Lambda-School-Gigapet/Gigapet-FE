import React from "react";
import NavBar from "./Navbar";
import SearchExampleStandard from './Searchbar'
import styled from 'styled-components'

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000000;
`

const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: 'Cookie', cursive;
  font-size: 50px;
  margin: 0;
  color: white;
  padding: 0 40px;
`
const Button = styled.button`
    width: 150px;
    margin: 14px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    border: none;
    background-color: red;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export default function Header() {
  return (
    <HeaderContent>
      <Logo>Gigapet</Logo>
      <SearchExampleStandard />
      <span className="nav-wrap">
        <NavBar></NavBar>
        <Button> Sign Out </Button>
      </span>
    </HeaderContent>
  );
}
