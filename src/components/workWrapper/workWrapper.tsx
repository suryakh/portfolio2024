import Grid from '@mui/material/Grid'
import React from 'react'
import './style.css'

const WorkWrapper = (props) =>{
    console.log(props,"===??")
    return (
        <Grid lg={12} className='workWrapper'>
                <Grid lg ={12} className='projectName'>
                   <p className='projectLabel'>{props.details.projectName}</p> 
                </Grid>
                <Grid lg={12 } className='skillLabel' container>{props.details.skills.join(' | ')}</Grid>
                <Grid lg={12} className='description'>{props.details.description}</Grid>
            </Grid>
    )
}
export default WorkWrapper