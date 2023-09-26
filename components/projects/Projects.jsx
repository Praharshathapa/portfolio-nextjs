// ProjectList.jsx
import React, { useState } from 'react';
import "./project.css"
import { Dialog } from '@headlessui/react';


const ProjectList = () => {
    const projects = [
        {
            id: 1,
            img: "",
            title: 'Pursuit-invasion',
            description: 'This is a project in which map made of graph has two vehicle which is runner and chaser. The runner goes random nodes whereas chaser chase the runner using A* algorithm using heuristic function. and finds the shortest path.This is just project to learn about the data structure and algorithm.',
            link: 'https://github.com/Praharshathapa/Pursuit-invasion',
        },
        {
            id: 2,
            img: "https://gifdb.com/images/high/peter-griffin-family-guy-coming-at-you-hnw5f3wjemsglmyn.gif",
            title: 'Dont Worry',
            description: 'comming soon ',
            link: "",
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

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
                        className="bg-black p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => openDescription(project.id)}
                    >
                        <img
                            src={project.img}
                            className="w-full h-auto rounded-lg mb-4"

                        />
                        <h3 className="text-2xl  mb-2 hover:text-cyan-600">{project.title}</h3>
                        <p className="text-cyan-600 mb-4">{project.description}</p>
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
            {selectedProject !== null && (
                <Dialog open={selectedProject !== null} onClose={closeDescription} as="div">
                    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
                        <div className="bg-black p-4 rounded shadow-md z-50 max-w-lg">
                            <Dialog.Title className="text-2xl font-semibold text-cyan-600">
                                {projects[selectedProject - 1].title}
                            </Dialog.Title>
                            <p className="text-cyan-600 mt-2">
                                {projects[selectedProject - 1].description}
                            </p>
                            <div className="mt-4">
                                <a
                                    href={projects[selectedProject - 1].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    Visit Project
                                </a>
                                <button
                                    onClick={closeDescription}
                                    className="ml-4 text-cyan-600 hover:text-cyan-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>


    )
}

export default ProjectList;
