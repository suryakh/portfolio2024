import React from 'react'
import LineWrapper from '../../components/lineDesignWrapper/lineDesign.tsx'
import { Button, Grid } from '@mui/material';
import './style.css'


const About = () => {
    return (
        <LineWrapper label={'about'}>
            <Grid className='aboutDescription' container>
                <Grid lg={3}>
                </Grid>
                <Grid lg={6} sm={6} md={6}>
                    <p>
                        <span>"</span>Cultivating a passion for innovation, I am eager to
                        immerse myself in a dynamic and collaborative
                        environment where I can actively contribute to the team's
                        success. I am driven by the opportunity to continually
                        learn and grow in the field of software development,
                        making meaningful contributions along the way.Armed with a strong 
                        foundation in software development principles and a commitment to excellence,
                        I am excited to embark on this journey of exploration and discovery,
                        making a lasting impact with every line of code I write.<span>"</span>
                    </p>
                </Grid>
                <Grid lg={12} textAlign={'center'} >
                    <Button variant='contained' color='secondary' >Dowload Cv</Button>
                </Grid>
            </Grid>
        </LineWrapper>
    )
}

export default About;