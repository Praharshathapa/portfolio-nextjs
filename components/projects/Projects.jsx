// ProjectList.jsx
import React, { useState } from 'react';
import "./project.css"
import { Dialog } from '@headlessui/react';


const ProjectList = () => {
    const projects = [
        {
            id: 1,
            title: 'Pursuit-invasion',
            description: 'This is a project in which map made of graph has two vehicle which is runner and chaser. The runner goes random nodes whereas chaser chase the runner using A* algorithm using heuristic function. and finds the shortest path.This is just project to learn about the data structure and algorithm.',
            link: 'https://github.com/Praharshathapa/Pursuit-invasion',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is the description of Project 2.',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(False);

    const openDescription = (projectId) => {
        setSelectedProject(projectId);
    };

    const closeDescription = () => {
        setSelectedProject(null);
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold text-center mb-8 ">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => openDialog(project.id)}
                    >
                        <img
                            src={`${project.id}`}
                            alt={project.title}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 hover:text-cyan-600">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:underline"
                        >
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProjectList;
