import React from 'react';

const Education = () => {
    const educationItems = [
        {
            institution: "University of Example",
            degree: "Bachelor of Science in Computer Science",
            year: "2015 - 2019",
        },
        {
            institution: "Example College",
            degree: "High School Diploma",
            year: "2011 - 2015",
        },
    ];

    return (
        <div className=" p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <ul>
                {educationItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        <h3 className="text-lg ">{item.institution}</h3>
                        <p className="text-gray-400">{item.degree}</p>
                        <p className="text-gray-400">{item.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
