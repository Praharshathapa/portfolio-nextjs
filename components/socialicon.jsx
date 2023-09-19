import React from "react";
import { Instagram, Linkedin, GitHub, Twitter } from "react-feather";

const RenderList = (props) => {
    return (
        <div className="fixed fixed top-1/2 left-4 transform -translate-y-1/2  p-1 rounded shadow-md z-50">
            <ul>
                <li className="mb-5">
                    <Instagram className="w-6 h-6" />
                </li>
                <li className="mb-5">
                    <Linkedin className="w-6 h-6" />
                </li>
                <li className="mb-5">
                    <GitHub className="w-6 h-6" />
                </li>
                <li>
                    <Twitter className="w-6 h-6" />
                </li>
            </ul>
        </div>
    );
};

export default RenderList;
