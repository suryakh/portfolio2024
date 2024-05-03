import React from'react'
import { Grid } from '@mui/material'
import './style.css'
import { skillLabels } from '../../shared/utils/contants.ts'




const SkillDesign = (props) =>{
return ( <Grid className='mainWrapperSkill' textAlign={'center'} lg={12}>
    <Grid lg={10} alignContent={'center'} container className='imageWrapper'>
        <Grid lg={4}>
        </Grid>
        <Grid lg={6}>
        <img src={require(`../../../public/images/skillsIcons/${props.label}.png`).default} height={"100%"} width={"100%"}></img>
        </Grid>
    </Grid>
    <Grid lg={12} className='skillLabel'>{skillLabels[props.label]}</Grid>
</Grid>)
}
export default SkillDesign