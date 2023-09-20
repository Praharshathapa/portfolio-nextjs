import React from 'react';

const Skills = () => {
    const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js", "UI/UX Design"];

    return (
        <div className=" p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="flex flex-wrap">
                {skillsList.map((skill, index) => (
                    <li key={index} className="mr-2 mb-2 p-2   ">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
