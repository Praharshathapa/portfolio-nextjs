// ProjectList.jsx
import React, { useState } from 'react';
import "./project.css"

const ProjectList = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is the description of Project 1.',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is the description of Project 2.',
        },
        // Add more projects here
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const openDescription = (projectId) => {
        setSelectedProject(projectId);
    };

    const closeDescription = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <button onClick={() => openDescription(project.id)}>
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedProject !== null && (
                <div className="project-popup">
                    <div className="project-popup-content">
                        <h3>{projects[selectedProject - 1].title}</h3>
                        <p>{projects[selectedProject - 1].description}</p>
                        <button onClick={closeDescription}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectList;
