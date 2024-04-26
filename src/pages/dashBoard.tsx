import Grid from '@mui/material/Grid';
import { NavBar } from '../components/navBar/navBar.tsx'
import UsingColorObject from '../shared/utils/miuiTheme.tsx';
import Button from '@mui/material/Button';
import React from 'react';
import './style.css'
import template from '../../public/images/template.png'
import profilgeeIma from '../../public/images/profile.png'



export const DashBoard = () => {
    const [myNummber, setMynummber] = React.useState(0)
    const MyChild = () => (<><Button variant="contained">Primary</Button><Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Secondary
    </Button></>)
    return (
        <Grid className='mainWrapper'>

            <NavBar />

            <div className='app-containter'>
                <div className='template-div'>
                    <img src={template} height={"800px"} width={"1500px"} />
                </div>
                <img className='profile-pic' src={profilgeeIma} height={"800px"} width={"800px"} />
                <div className='profile-description'>
                    <div className='profile-greeting'>
                        <p>
                            Hello I'm
                        </p>
                    </div>
                    <div className='profile-name'>
                    <h2>Surya Khandavilli</h2>
                    </div>
                    <div className='profile-role'>
                    <p>Full stack developer</p>
                    </div>
                </div>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <MyChild />
            </div>
            {/* <UsingColorObject >{mychind} </UsingColorObject> */}
        </Grid>
    )
}