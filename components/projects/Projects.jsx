import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {  motion } from 'framer-motion';

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
                'https://miro.medium.com/v2/resize:fit:828/format:webp/1*xSqK9iS7nZAaB-Sdwiwjow.png',
            title: 'Credit Card Fraud Detection',
            description2: 'Protecting Your Finances and Peace of Mind',
            link: '',
        },
        {
            id: 4,
            img:
                'https://pyimagesearch.com/wp-content/uploads/2019/02/breast_cancer_classification_header.jpg',
                title: 'Classifying Breast Cancer',
                description: 'Empowering Early Detection and Treatment',
            link: '',
        },
        {
            id: 5,
            img:
                'https://i.pinimg.com/564x/d0/64/c3/d064c3e32c2f0f74a0346d1506998a50.jpg',
                title: 'Minecraft Town layout',
                description: 'Sample Project and Description',
                description2: "Sample Project and Description",
                link: '',
        },
        {
            id: 6,
            img:
                'https://media.tenor.com/UONjvx6XGu0AAAAd/family-guy-peter-family-guy.gif',
                title: 'Sample Project',
                description: 'Sample Description',
            link: '',
        },
        {
            id: 7,
            img:
                'https://24.media.tumblr.com/tumblr_ma8hseCSi11qcj88oo1_500.gif',
                title: 'Sample Project',
                description: 'Sample Description',
            link: '',
        },
        {
            id: 8,
            img:
                'https://44.media.tumblr.com/22fbca2e2896667c1eaeee0efd00f6f5/tumblr_nwevu7qfxa1ujuk5ho1_1280.gif',
                title: 'Sample Project',
                description: 'Sample Description',
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="p-3 rounded-lg shadow-md cursor-pointer bg-cyan-600"
                        onClick={() => openDescription(project.id)}
                        whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-2xl font-semibold mt-2 mb-2">{project.title}</h3>
                        <p className="text-gray-700">{project.description2}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline"
                        >
                            Visit Project
                        </a>
                    </motion.div>
                ))}
            </div>
            {selectedProject !== null && (
                <Dialog open={true} onClose={closeDescription} as="div">
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