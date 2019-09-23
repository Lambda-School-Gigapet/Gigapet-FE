import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item className="menu-items">
                <NavLink to="#">Home</NavLink>
            </Menu.Item>
            <Menu.Item className="menu-items">
                <NavLink to="#">About</NavLink>
            </Menu.Item>
            <Menu.Item className="menu-items">
                <NavLink to="#">Contact</NavLink>
            </Menu.Item>
        </Menu>
    )
};