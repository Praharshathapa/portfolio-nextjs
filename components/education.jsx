import React from 'react';

const Education = () => {
    const educationItems = [
        {
            institution: "Birmingham City University",
            degree: "Bachelor of Science in Data Science",
            year: "2020 - 2022",
        },
        {
            institution: "Reliance College",
            degree: "High School Diploma",
            year: "2022 - 2026",
        },
    ];

    return (
        <div className=" p-4 rounded shadow-md">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <ul>
                {educationItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        <h3 className="text-lg ">{item.institution}</h3>
                        <p className="text-gray-400 text-s">{item.degree}</p>
                        <p className="text-gray-400">{item.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
