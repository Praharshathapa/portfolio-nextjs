import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        first: '',
        last: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        e.target.reset();

        setFormData({
            email: '',
            phone: '',
            first: '',
            last: '',
            message: '',
        });
    };

    return (
        <div className="container mx-auto py-8  text-white">
            <h2 className="text-6xl font-semibold text-center mb-10">Contact Me</h2>
            <div className="bg-gray-300 p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="frm-email" className="text-cyan-800 font-medium block mb-2">Email</label>
                        <input
                            id="frm-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="frm-phone" className="text-cyan-800 font-medium block mb-2">Phone</label>
                        <input
                            id="frm-phone"
                            type="text"
                            name="phone"
                            autoComplete="tel"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-2">
                            <label htmlFor="frm-first" className="text-cyan-800 font-medium block mb-2">First Name</label>
                            <input
                                id="frm-first"
                                type="text"
                                name="first"
                                autoComplete="given-name"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                value={formData.first}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label htmlFor="frm-last" className="text-cyan-800 font-medium block mb-2">Last Name</label>
                            <input
                                id="frm-last"
                                type="text"
                                name="last"
                                autoComplete="family-name"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                value={formData.last}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="frm-message" className="text-cyan-800 font-medium block mb-2">Message</label>
                        <textarea
                            id="frm-message"
                            rows="6"
                            name="message"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300 ease-in-out">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
