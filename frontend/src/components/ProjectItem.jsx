import React from 'react';
import {  BadgeX, UserPen, CheckCheck } from 'lucide-react';

export default function ProjectItem({ project, onToggleStatus, onEditProject, onDeleteProject }) {
  const isCompleted = project.status === 'completed';
  
  return (
    <div 
      className={`border ${
        isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
      } rounded-lg p-4 shadow-sm`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => onToggleStatus(project.id)}
            className={`mr-3 flex-shrink-0 ${
              isCompleted 
                ? 'text-green-500 hover:text-green-600' 
                : 'text-gray-400 hover:text-gray-500'
            }`}
            aria-label={`Mark project as ${isCompleted ? 'pending' : 'completed'}`}
          >
            {isCompleted ? (
              <CheckCheck size={20} />
            ) : (
              <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
            )}
          </button>
          <div>
            <h3 className={`font-medium ${
              isCompleted 
                ? 'line-through text-gray-500' 
                : 'text-indigo-600'
            }`}>
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className={`text-xs px-2 py-1 rounded  ${
                isCompleted 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                Due: {new Date(project.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => onEditProject(project)}
            className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            aria-label="Edit project"
          >
            <UserPen size={18} />
          </button>
          <button 
            onClick={() => onDeleteProject(project.id)}
            className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
            aria-label="Delete project"
          >
            <BadgeX size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}