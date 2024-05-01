import React from 'react'
import LineWrapper from '../../components/lineDesignWrapper/lineDesign.tsx'
import { Button, Grid } from '@mui/material';
import SkillDesign from '../../components/skillsComponent/skillComponent.tsx'
import './style.css'


const Skills = () => {
    // const mySkillsOne = ["html", "css", "javascript", "typescript", "react"];
    // const mySkillsTwo = ["html", "css", "javascript", "typescript", "react"];
    // const mySkillsThree = ["redux", "nodejs", "expressjs", "nestjs", "flutter", "dart"];
    // const mySkillsFour = ["redis", "mongodb", "solr", "neo4j", "git"];
    const mySkillsOne = ["mongodb", "solr"];
    const mySkillsTwo = ["html", "css","javascript","flutter",];
    const mySkillsThree = [ "typescript", "react","redux","nodejs","dart"];
    const mySkillsFour = ["nodejs", "expressjs", "nestjs","redis"];
    const mySkillsFive = [ "neo4j", "git"];

    return (
        <LineWrapper label={'skills'}>
            <Grid className='skillsWrapper' container>
                <Grid lg={2}>
                </Grid>
                <Grid lg={12} container >
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