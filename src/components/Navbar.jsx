import React from 'react'
import { AppBar,Toolbar,Typography,styled, Tab} from '@mui/material'
import { NavLink } from 'react-router-dom'
const Header=styled(AppBar)`
background:black;
`
const Tabs=styled(NavLink)`
font-size:1em;
margin-right:1em;
text-decoration:none;
color:inherit;
`
const Navbar = () => {
  return (
    <div>
        <Header position="static">
            <Toolbar>
                <Tabs to="/">
                    React CRUD
                </Tabs>
                <Tabs to="/users">
                    Users
                </Tabs>
                <Tabs to="/addusers">
                    Add Users
                </Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar