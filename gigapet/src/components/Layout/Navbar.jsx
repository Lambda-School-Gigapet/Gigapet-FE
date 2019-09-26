import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from 'styled-components'

const BlackAndCursive = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
    font-family: Lobster, cursive;

    a {
        color: black;
    }
`

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item className="menu-items">
                <BlackAndCursive><NavLink to="/dashboard">Dashboard</NavLink></BlackAndCursive>
            </Menu.Item>
            
            <Menu.Item>
            <BlackAndCursive><NavLink to="/settings">Settings</NavLink></BlackAndCursive>
            </Menu.Item>
        </Menu>
    )
};