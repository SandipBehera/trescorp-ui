import React, { useState } from "react";
import Layout from "../components/layout";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log(formData);
        // Clear form after submission (optional)
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      };
    return(
        <Layout>
            <main>
                <div style={{ overflow: "hidden" }}>
                    <section className="container text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
                        <h1
                            className="text-xs lg:text-9xl mb-2"
                            style={{ textTransform: "uppercase" }}
                        >
                            Contact Us
                        </h1>
                        <div className="flex flex-wrap -m-4 mt-10">
                            <div className="p-4 md:w-2/5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.262993288052!2d103.8527292!3d1.2844818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190932680f41%3A0x50da132f16dc7865!2sTrescorp%20Alliance%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1720613804167!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="p-4 md:w-3/5">
                                <div className="px-4 mx-40">
                                    <p className="text-base" style={{color:'#ffd100'}}>
                                        Contact Us
                                    </p>
                                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                                        Trescorp Alliance Pte Ltd
                                    </h1>
                                    <p className="text-lg leading-relaxed">
                                    20, Collyer Quay, #18-01, Singapore 049319.
                                    </p>
                                    <p className="text-lg leading-relaxed mt-4">
                                        Email: info@trescorp.biz
                                    </p>
                                    <p className="text-lg leading-relaxed mt-4">
                                        Phone: +65 6221 2210
                                    </p>
                                    <button className="btn btn-oval inline-flex items-center mt-4 font-bold" >
                                        Contat Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
                    </section>
                </div>
                </main>
        </Layout>
    )
}
export default Contact;