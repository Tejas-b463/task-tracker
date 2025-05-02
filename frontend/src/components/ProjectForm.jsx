import React from 'react';

const ProjectForm = ({ 
  newProject, 
  setNewProject, 
  onCreateProject, 
  onUpdateProject, 
  editProjectId, 
  projectCount 
}) => {
  const isFormDisabled = projectCount >= 4 && !editProjectId;
  
  return (
    <div className={`bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200 ${isFormDisabled ? 'opacity-50' : ''}`}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={newProject.title}
            onChange={(e) => setNewProject({...newProject, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isFormDisabled}
            placeholder="Project title"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={newProject.description}
            onChange={(e) => setNewProject({...newProject, description: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isFormDisabled}
            placeholder="Project description"
            rows="3"
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={newProject.status}
              onChange={(e) => setNewProject({...newProject, status: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isFormDisabled}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input
              type="date"
              value={newProject.date}
              onChange={(e) => setNewProject({...newProject, date: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isFormDisabled}
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          {(projectCount < 4 || editProjectId) ? (
            <button
              onClick={editProjectId ? onUpdateProject : onCreateProject}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              {editProjectId ? 'Update Project' : 'Create Project'}
            </button>
          ) : (
            <p className="text-amber-600 font-medium">Maximum of 4 projects</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectForm