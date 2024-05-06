import React from 'react'
import LineWrapper from '../../components/lineDesignWrapper/lineDesign.tsx'
import { Grid } from '@mui/material'
import WorkWrapper from '../../components/workWrapper/workWrapper.tsx'


const Work = () => {

    const Tconect = {
        projectName: "TelstraConnect",
        skills: ["React.js", "TypeScript", "Node.js", "Nest.js"],
        description: "Working as a Software Developer and Assitant TeamLead for Telstra's Tconnect Project, a web application supported by Node microservices. Demonstrating proficiency in React and Node.js through hands-on experience on this project. Successfully collaborating with clients to understand requirements and design APIs tailored to their needs",
    }

    const Elsevier = {
        projectName: "Elsevier",
        skills: ["React.js", "JavaScript", "Node.js", "express.js","solr","neo4j","mongoDB"],
        description: "Served as a Software Developer for ELSEVIER's OrgTool Project, a web-based application.Leveraged expertise in React and Node.js to contribute effectively to project development and execution.",
    }
    const Newscom = {
        projectName: "Newscom",
        skills: ["Flutter", "Dart", "Node.js","fastify.js"],
        description: "Collaborated as a Software Developer on the NEWSCOM Project, an innovative news mobile application delivering real-time updates in Malayalam and Telugu languages. Demonstrated proficiency in Flutter and Node.js while actively contributing to the project's development and implementation",
    }
    return (
        <LineWrapper label={"Work"}>
            <Grid>
                <Grid lg={12} container>
                    <Grid lg={6}  >
                        <WorkWrapper details={Tconect} />
                    </Grid>
                    <Grid lg={6} >
                    </Grid>
                </Grid>
                <Grid lg={12}  container>
                    <Grid lg={6} >
                    </Grid>
                    <Grid lg={6} >
                    <WorkWrapper details={Elsevier}  />
                    </Grid>
                </Grid>
                <Grid lg={12}  container>
                    <Grid lg={6} >
                    <WorkWrapper details={Newscom} />
                    </Grid>
                    <Grid lg={6} >
                    </Grid>
                </Grid>
            </Grid>
        </LineWrapper>
    )
}

export default Work