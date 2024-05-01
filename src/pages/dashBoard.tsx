import Grid from '@mui/material/Grid';
import { NavBar } from '../components/navBar/navBar.tsx'
import UsingColorObject from '../shared/utils/miuiTheme.tsx';
import Button from '@mui/material/Button';
import React from 'react';
import './style.css'
import template from '../../public/images/template.png'
import profilgeeIma from '../../public/images/profile.png'
import LineWrapper from '../../src/components/lineDesignWrapper/lineDesign.tsx'


const DashBoard = () => {
    return (
        <Grid className='dashBoard' lg={12} md={12}>
            <Grid className='template-div' lg={12} sm={12} md={12}>
                <img src={template} height={"100%"} width={"100%"} />
            </Grid>
            <Grid lg={12} xs={12} sm={12} container className='profile-content'>
                <Grid sm={12} md={6} lg={6} container>
                    <Grid sm={4} md={4} lg={4} >
                    </Grid>
                    <Grid sm={12} md={5} lg={5} >
                        <img src={profilgeeIma} className='profileImage' />
                    </Grid>
                </Grid>
                <Grid container className='profile-description' sm={12} md={6} alignContent={'center'}>
                    <Grid xs={3}>
                    </Grid>
                    <Grid xs={6}>
                        <Grid className='profile-greeting' style={{ width: "160px" }} xs={10}>
                            <p>
                                Hello I'm
                            </p>
                        </Grid>
                        <Grid className='profile-name'>
                            <h2>Surya Khandavilli</h2>
                        </Grid>
                        <Grid className='profile-role'>
                            <p>Full stack developer</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DashBoard;