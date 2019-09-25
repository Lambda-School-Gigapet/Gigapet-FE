import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item className="menu-items">
                <NavLink to="/dashboard">Dashboard</NavLink>
            </Menu.Item>
            
            <Menu.Item>
                <NavLink to="/settings">Settings</NavLink>
            </Menu.Item>
        </Menu>
    )
};