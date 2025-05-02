import React,{ useState, useEffect } from 'react';
import toast from "react-hot-toast";
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import ProjectHeader from '../components/ProjectHeader';

export default function ProjectManagement() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    status: 'pending',
    date: new Date().toISOString().split('T')[0]
  });
  const [editProjectId, setEditProjectId] = useState(null);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

 
  const handleCreateProject = () => {
    if (projects.length >= 4) {
      toast.error("Maximum of 4 projects allowed");
      return;
    }
    
    if (newProject.title.trim()) {
      const projectToAdd = {
        id: Date.now(),
        ...newProject
      };
      
      setProjects([...projects, projectToAdd]);
      toast.success("Project created successfully!");
      
     
      setNewProject({
        title: '',
        description: '',
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      });
      
    
      if (projects.length === 3) {
        toast.success("You've created your maximum allowed projects!");
      }
    } else {
      toast.error("Please enter a project title");
    }
  };

  // Delete project
  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
    toast.success("Project deleted successfully!");
    
    if (editProjectId === projectId) {
      setEditProjectId(null);
      setNewProject({
        title: '',
        description: '',
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  // editing project
  const handleSetEditProject = (project) => {
    setEditProjectId(project.id);
    setNewProject({
      title: project.title,
      description: project.description,
      status: project.status,
      date: project.date
    });
  };

  // Update project
  const handleUpdateProject = () => {
    if (newProject.title.trim()) {
      setProjects(projects.map(project => 
        project.id === editProjectId ? { ...project, ...newProject } : project
      ));
      
      toast.success("Project updated successfully!");
      
     
      setNewProject({
        title: '',
        description: '',
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      });
      setEditProjectId(null);
    } else {
      toast.error("Please enter a project title");
    }
  };

 
  const toggleProjectStatus = (projectId) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, status: project.status === 'pending' ? 'completed' : 'pending' } 
        : project
    ));
    toast.success("Project status updated!");
  };

  const clearAllProjects = () => {
    if (window.confirm("Are you sure you want to delete all projects?")) {
      setProjects([]);
      toast.success("All projects cleared!");
      setEditProjectId(null);
      setNewProject({
        title: '',
        description: '',
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <div className="min-h-screen p-4 mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <ProjectHeader 
          projectCount={projects.length} 
          onClearAll={clearAllProjects} 
        />
        
        <ProjectForm 
          newProject={newProject}
          setNewProject={setNewProject}
          onCreateProject={handleCreateProject}
          onUpdateProject={handleUpdateProject}
          editProjectId={editProjectId}
          projectCount={projects.length}
        />

        <ProjectList 
          projects={projects}
          onToggleStatus={toggleProjectStatus}
          onEditProject={handleSetEditProject}
          onDeleteProject={handleDeleteProject}
        />
      </div>
    </div>
  );
}