import React from "react";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";
import { GitHub } from "react-feather";
import { Twitter } from "react-feather";

const RenderList = props => {
    const animals = [
        <Instagram />,
        <Linkedin />,
        <GitHub />,
        <Twitter />

    ];

    return (
        <ul>
            {animals.map(item => (
                <li key={item.id}>{item.animal}</li>
            ))}
        </ul>
    );
};

export default RenderList