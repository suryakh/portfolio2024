import React from 'react'
import LineWrapper from '../../components/lineDesignWrapper/lineDesign.tsx'
import { Button, Grid } from '@mui/material';
import SkillDesign from '../../components/skillsComponent/skillComponent.tsx'
import './style.css'


const Skills = () => {
    const mySkillsOne = ["html", "css",];
    const mySkillsTwo = ["javascript","typescript", "react","redux"];
    const mySkillsThree = ["nodejs","expressjs", "nestjs","flutter","dart"];
    const mySkillsFour = [ "mongodb", "solr","redis","neo4j",];
    const mySkillsFive = [ "git"];
    return (
        <LineWrapper label={'skills'}>
            <Grid className='skillsWrapper' container>
                <Grid lg={2}>
                </Grid>
                <Grid lg={12} container >
                    <Grid lg={1}></Grid>
                    <Grid lg={2} marginTop={28}>
                        <Grid lg={12}>
                            {mySkillsOne.map((ele) => <SkillDesign label={ele} />)}
                        </Grid>
                    </Grid>
                    <Grid lg={2} marginTop={10}>
                        {mySkillsTwo.map((ele) => <SkillDesign label={ele} />)}
                    </Grid>
                    <Grid lg={2}>
                        {mySkillsThree.map((ele) => <SkillDesign label={ele} />)}
                    </Grid>
                    <Grid lg={2} marginTop={10}>
                        {mySkillsFour.map((ele) => <SkillDesign label={ele} />)}
                    </Grid>
                    <Grid lg={2} marginTop={28}>
                        {mySkillsFive.map((ele) => <SkillDesign label={ele} />)}
                    </Grid>

                </Grid>
            </Grid>
        </LineWrapper>
    )
}

export default Skills;