import React from 'react';
import { FaCheckCircle, FaHtml5, FaReact, FaPython, FaChartBar, FaTable, FaRegChartBar, FaCode, FaCodeBranch, FaDatabase } from 'react-icons/fa';

const skillsList = [
    { name: "HTML, CSS, JavaScript", icon: <FaHtml5 className="text-blue-500" /> },
    { name: "React, Node.js, Figma", icon: <FaReact className="text-blue-500" /> },
    { name: "Programming (R,Python)", icon: <FaPython className="text-blue-500" />, },
    { name: "Database Management (SQL, NoSQL)", icon: <FaDatabase className="text-blue-500" /> },
    { name: "Data Visualization (Matplotlib, Seaborn)", icon: <FaChartBar className="text-blue-500" /> },
    { name: "Data Analysis with Pandas", icon: <FaTable className="text-blue-500" /> },
    { name: "Machine Learning", icon: <FaRegChartBar className="text-blue-500" /> },
    { name: "Version Control (Git)", icon: <FaCodeBranch className="text-blue-500" /> },
];

const Skills = () => {
    return (
        <div className="p-4 rounded shadow-md">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-4 text-lg text-gray-600">
                {skillsList.map((skill, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="mr-2">{skill.name}</span>
                        {skill.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
