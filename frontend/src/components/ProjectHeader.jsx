import React from 'react';

const ProjectHeader = ({ projectCount }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-indigo-600">Create Project</h1>
      <div className="flex items-center gap-3">
        <div className="text-sm font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
          {projectCount}/4 Projects
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader