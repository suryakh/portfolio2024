import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css'

export const NavBar = () =>{

  const [small, setSmall] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>{
        setSmall(window.pageYOffset > 200)
        console.log(window.pageYOffset,"===??")
      }
      );
    }
  }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position= {`${small ? "fixed" : "static"}`}  className= {`${small ? "" : "myclass"}`} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {small && <div className='mySpace'>
      </div>}
    </Box>

    )
} 