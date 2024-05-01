import Grid from '@mui/material/Grid';
import { NavBar } from '../components/navBar/navBar.tsx'
import Button from '@mui/material/Button';
import React from 'react';
import './style.css'
import DashBoard from './dashBoard.tsx'
import About from './about/about.tsx'
import Skills from './skills/skills.tsx';



export const MainPage = () => {
    return (
        <Grid className='mainWrapper' sm={12}>
            <NavBar />
            <div className='app-containter'>
                <DashBoard />
                <About />
                <Skills />
            </div>
        </Grid>
    )
}