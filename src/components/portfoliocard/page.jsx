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
<Card
    sx={{
        maxWidth: 400,
        height: 450, // Fixed height for consistency
        display: "flex",
        flexDirection: "column",
    }}
>
    <CardMedia
        sx={{ height: 200 }}
        image={project.image}
        title="Project Image"
    />
    <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Typography gutterBottom variant="h5" component="div">
            {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {project.description}
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" href={project.href} target="_blank">
            Github
        </Button>
        <Button size="small" href={project.liveLink} target="_blank">
            Live Website
        </Button>
    </CardActions>

    {/* Accordion Section - Prevents Card from Expanding */}
    <div style={{ flexShrink: 0, overflow: "auto" }}>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Technologies Used</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    {project.technologies.join(", ")}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
</Card>
    );
}