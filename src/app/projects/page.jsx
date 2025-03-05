import PortfolioCard from '@/components/portfoliocard/page';
import { Typography } from '@mui/material';
import { projects } from '@/library/utils';

export default function ProjectsPage() {
  return (
    <div>
      {/* <Typography variant="h4" gutterBottom style={}>
        My Projects
      </Typography> */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '50px', justifyContent: "center"}}>
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}