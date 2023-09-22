import React from 'react';
import { FaCheckCircle, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaChartBar } from 'react-icons/fa';

const Skills = () => {
    const skillsList = [
        { name: "HTML, CSS, JavaScript", icon: <FaHtml5 /> },
        { name: "React, Node.js, Figma", icon: <FaReact /> },
        { name: "Python, C, C+", icon: <FaPython /> },
        { name: "Database Management (SQL, NoSQL)", icon: <FaDatabase /> },
        { name: "Data Visualization (Matplotlib, Seaborn)", icon: <FaChartBar /> },
    ];

    return (
        <div className="p-4 rounded shadow-md">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-4 text-lg text-gray-600">
                {skillsList.map((skill, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span>{skill.name}</span>
                        {skill.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
