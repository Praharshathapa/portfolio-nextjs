import React from 'react';
import './education.css';

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
        <div className="timeline-container">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            {educationItems.map((item, index) => (
                <li key={index} className="timeline-item">
                    <div className="timeline-item-content">
                        <h3 className="text-lg">{item.institution}</h3>
                        <p className="text-gray-400 text-s">{item.degree}</p>
                        <p className="text-gray-400">{item.year}</p>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Education;
