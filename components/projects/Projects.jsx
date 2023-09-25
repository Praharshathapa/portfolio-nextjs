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

    const [selectedProject, setSelectedProject] = useState(null);

    const openDescription = (projectId) => {
        setSelectedProject(projectId);
    };

    const closeDescription = () => {
        setSelectedProject(null);
    };

    return (
        

export default ProjectList;
