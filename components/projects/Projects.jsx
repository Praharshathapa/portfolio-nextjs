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
            description2:'Navigating the Chase: A Graph-Based Pursuit and Evasion Simulation',
        },
        {
            id: 2,
            img:
                'https://media.tenor.com/yzkYMMlUy2gAAAAj/makeamericagreat.gif',
            title: 'Fake News Detection',
            description: ' Fake news is sometimes transmitted through the internet by some unauthorized sources, which creates issues for the targeted person and it makes them panic and leads to even violence. ',
            link: '',
            description2:"Guarding the Truth: Unmasking Misinformation in the Digital Age",
        },
        {
            id: 3,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
            title: 'Don’t Worry',
            description: 'Coming soon',
            link: '',
        },
        {
            id: 4,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
            title: 'Don’t Worry',
            description: 'Coming soon',
            link: '',
        },
        {
            id: 5,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
            title: 'Don’t Worry',
            description: 'Coming soon',
            link: '',
        },
        {
            id: 6,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
            title: 'Don’t Worry',
            description: 'Coming soon',
            link: '',
        },
        {
            id: 7,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
            title: 'Don’t Worry',
            description: 'Coming soon',
            link: '',
        },
        {
            id: 8,
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
        <div className="container mx-auto py-10 bg-black">
            <h2 className="text-6xl font-semibold text-center mt-8 p-5 text-cyan-600">Projects</h2>
            <p className="text-cyan-600 mb-6">
                
                <a
                    href="mailto:thapapraharsha@gmail.com"
                    className="text-cyan-200 hover:text-cyan-100 transition duration-300 ease-in-out text-xl"
                >
                    thapapraharsha@gmail.com
                </a>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-3 rounded-lg shadow-md cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-cyan-600"
                        onClick={() => openDescription(project.id)}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-2xl font-semibold mt-2 mb-2">{project.title}</h3>
                        <p className="text-gray-700 ">{project.description2}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline"
                        >
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
            {selectedProject !== null && (
                <Dialog open={selectedProject !== null} onClose={closeDescription} as="div">
                    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
                        <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-lg">
                            <Dialog.Title className="text-3xl font-semibold text-cyan-600">
                                {projects[selectedProject - 1].title}
                            </Dialog.Title>
                            <img
                                src={projects[selectedProject - 1].img}
                                alt={projects[selectedProject - 1].title}
                                className="w-full h-auto rounded-lg mt-4"
                            />
                            <p className="mt-4 text-gray-700">
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
                                    className="ml-4 text-cyan-600 hover:text-cyan-800"
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
