import React from 'react';

const Skills = () => {
    const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Figma", "Python", "Data Science:Extraction,Collection,Visualiazation,Manipulation"];

    return (
        <div className=" p-4 rounded shadow-md">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="columns-1 text-s">
                {skillsList.map((skill, index) => (
                    <li key={index} className="mr-2 mb-2 p-2 text-gray-400 ">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
