"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { projects } from '@/library/utils';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function PortfolioCard({ project }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{ height: 200 }}
                image= {project.image}
                title="Project Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.description}
                </Typography>
                {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   <h3>Technologies Used:</h3> {project.technologies}
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small" href={project.href} target="_blank">
                    Github
                </Button>
                <Button size="small" href={project.liveLink} target="_blank">
                    Live Website
                </Button>
                {/* <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
            </CardActions>

            {/* Dropdown Section */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Technologies Used</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                     {project.technologies.join(', ')}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
}