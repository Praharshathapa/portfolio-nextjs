import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ProjectList = () => {
    const projects = [
        {
            id: 1,
            img: 'https://media.tenor.com/JhsJQcv80uYAAAAC/riding-bean-car-chase.gif',
            title: 'Pursuit-invasion',
            description:
                'This is a project in which a map made of a graph has two vehicles: a runner and a chaser. The runner goes to random nodes, whereas the chaser chases the runner using the A* algorithm with a heuristic function to find the shortest path. This is just a project to learn about data structures and algorithms.',
            link: 'https://github.com/Praharshathapa/Pursuit-invasion',
        },
        {
            id: 2,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
            title: 'Don’t Worry',
            description: 'Coming soon',
            link: '',
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
            <h2 className="text-7xl font-semibold text-center mb-8 text-black">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-black p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => openDescription(project.id)}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl mb-2 ">{project.title}</h3>
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
                            <img
                                src={projects[selectedProject - 1].img}
                                alt={projects[selectedProject - 1].title}
                                className="w-full h-auto rounded-lg mt-2"
                            />
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
    );
};

export default ProjectList;
