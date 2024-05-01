import { Grid } from '@mui/material'
import React from 'react'
import './style.css'

export default function LineWrapper(props){
    return(
            <Grid container>
                <Grid xs={2} md={2} lg={2} className='lineDesignLeft'>
                    <Grid className='bullet' lg={1}>
                    </Grid>
                </Grid>
                <Grid xs={10} md={10} lg={10} className='lineDesignRight'>
                    <Grid className='label'>
                        {props.label} {<span className='labelArrow'> /{'>'}</span>}
                    </Grid>
                    <div className='contentHolder'>
                      {props.children}
                    </div>
                </Grid>
            </Grid>
    )
}