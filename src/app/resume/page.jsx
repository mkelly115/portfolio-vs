"use client"

import Button from "@mui/material/Button";
import "./styles.css"

const ResumeDownload = () => {
    const handleDownload = () => {
        const filename = "Michael-Kelly-Resume.pdf";
        const filePath = `/${filename}`; 

        const link = document.createElement("a");
        link.href = filePath;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="parent-div">
            <h1>Michael Kelly's Resume</h1>
        <div className="download-div">
            <Button onClick={handleDownload} variant="contained">Download Resume</Button>
        </div>

        </div>
    );
};

export default ResumeDownload;