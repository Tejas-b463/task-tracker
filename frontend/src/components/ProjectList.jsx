import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, onToggleStatus, onEditProject, onDeleteProject }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Projects</h2>
      
      {projects.length > 0 ? (
        projects.map(project => (
          <ProjectItem 
            key={project.id}
            project={project}
            onToggleStatus={onToggleStatus}
            onEditProject={onEditProject}
            onDeleteProject={onDeleteProject}
          />
        ))
      ) : (
        <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded-lg">
          No projects yet. Fill out the form above to create your first project.
        </div>
      )}
    </div>
  );
}
export default ProjectList