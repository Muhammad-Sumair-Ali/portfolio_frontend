import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
    const [editProject, setEditProject] = useState(null);
    const [adminToken, setAdminToken] = useState('YOUR_SECRET_ADMIN_TOKEN'); // Use a secure method in production

    useEffect(() => {
        axios.get('http://localhost:5000/api/allProjects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const handleAddProject = () => {
        axios.post('http://localhost:5000/api/admin/createProjects', newProject, {
            headers: { Authorization: adminToken }
        })
        .then(response => {
            setProjects([...projects, response.data]);
            setNewProject({ title: '', description: '', link: '' });
        })
        .catch(error => console.error('Error adding project:', error));
    };

    const handleEditProject = (project) => {
        axios.put(`http://localhost:5000/api/admin/updateProjects/${project._id}`, project, {
            headers: { Authorization: adminToken }
        })
        .then(response => {
            setProjects(projects.map(p => p._id === response.data._id ? response.data : p));
            setEditProject(null);
        })
        .catch(error => console.error('Error updating project:', error));
    };

    const handleDeleteProject = (id) => {
        axios.delete(`http://localhost:5000/api/admin/deleteProjects/${id}`, {
            headers: { Authorization: adminToken }
        })
        .then(() => {
            setProjects(projects.filter(project => project._id !== id));
        })
        .catch(error => console.error('Error deleting project:', error));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Add New Project</h2>
            <input
                type="text"
                placeholder="Title"
                value={newProject.title}
                onChange={e => setNewProject({ ...newProject, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newProject.description}
                onChange={e => setNewProject({ ...newProject, description: e.target.value })}
            />
            <input
                type="text"
                placeholder="Link"
                value={newProject.link}
                onChange={e => setNewProject({ ...newProject, link: e.target.value })}
            />
            <button onClick={handleAddProject}>Add Project</button>

            <h2>Existing Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <input
                            type="text"
                            value={editProject && editProject._id === project._id ? editProject.title : project.title}
                            onChange={e => setEditProject({ ...project, title: e.target.value })}
                            disabled={editProject && editProject._id !== project._id}
                        />
                        <input
                            type="text"
                            value={editProject && editProject._id === project._id ? editProject.description : project.description}
                            onChange={e => setEditProject({ ...project, description: e.target.value })}
                            disabled={editProject && editProject._id !== project._id}
                        />
                        <input
                            type="text"
                            value={editProject && editProject._id === project._id ? editProject.link : project.link}
                            onChange={e => setEditProject({ ...project, link: e.target.value })}
                            disabled={editProject && editProject._id !== project._id}
                        />
                        {editProject && editProject._id === project._id ? (
                            <>
                                <button onClick={() => handleEditProject(editProject)}>Save</button>
                                <button onClick={() => setEditProject(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => setEditProject(project)}>Edit</button>
                                <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
