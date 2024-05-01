import React from 'react'
import LineWrapper from '../../components/lineDesignWrapper/lineDesign.tsx'
import { Button, Grid } from '@mui/material';
import './style.css'


const Skills = () => {
    return (
        <LineWrapper label={'skills'}>
            <Grid className='aboutDescription' container>
                <h1>SKILLS</h1>
            </Grid>
        </LineWrapper>
    )
}

export default Skills;