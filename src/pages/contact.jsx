import React, { useState } from "react";
import Layout from "../components/layout";
import { submitForm } from "../service/submitform";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
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
    submitForm(formData);
    // Clear form after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
    });
  };
  return (
    <Layout>
      <main>
        <div style={{ overflow: "hidden" }}>
          <section
            className="container mx-auto max-w-none text-gray-600 body-font md:my-auto relative"
            style={{ backgroundColor: "black" }}
          >
            <div className="absolute inset-0 bg-gray-800 opactiy-70">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('../img/2968.jpg')" }}
              ></div>
            </div>
            <div className="relative flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="my-20 sm:my-5 md:my-20">
                <span
                  className="text-white transition-all duration-300 inline-block font-bold text-4xl md:text-6xl lg:text-7xl"
                  style={{
                    color: "white",
                    transition: "all .3s ease",
                    display: "inline-block",
                  }}
                ></span>
                <span className="ekit-heading__shadow-text2"> Contact Us</span>
              </div>
            </div>
          </section>
          <section className="container text-gray-600 body-font mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-40 md:my-0">
            <div className="flex flex-wrap -m-4 mt-10">
             
              <div className="p-4 md:w-full">
              <div className="container mx-auto p-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`} style={{alignItems:'center'}}>
                <div
                  className="card bg-white-800  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                   style={{ height: "400px" }}
                >
                  <h2
                    className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-yellow-500"
                    style={{ textAlign: "center" }}
                  >
                    Head Office
                  </h2>
                    
                  <h1 className="text-xl font-extrabold text-gray-900 mb-4">
                    Trescorp Alliance Pte Ltd
                  </h1>
                  <p className="text-xs leading-relaxed">
                    20, Collyer Quay, #18-01, Singapore 049319.
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-envelope"></i> Email: <a href ="mailto:info@trescorp.biz" style={{color:'blue', textDecoration:'underline'}}>info@trescorp.biz</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-phone"></i> Phone:<a href ="tel:+6562212210" style={{color:'blue', textDecoration:'underline'}}> +65 6221 2210</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-clock"></i> Working Hours: Mon-Fri 9:00
                    AM - 6:00 PM
                  </p>
                </div>
                <div
                  className="card bg-white-800  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                   style={{ height: "400px" }}
                >
                  <h2
                    className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-yellow-500"
                    style={{ textAlign: "center" }}
                  >
                    Oman Office
                  </h2>
                    
                  <h1 className="text-xl font-extrabold text-gray-900 mb-4">
                    Trescorp Alliance Pte Ltd
                  </h1>
                  <p className="text-xs leading-relaxed">
                  Office 1991 Building
Office No. 321, 3rd Floor
Way No 4560
South Al Khuwair
Muscat, Sultanate of Oman

                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-envelope"></i> Email: <a href ="mailto:info@trescorp.biz" style={{color:'blue', textDecoration:'underline'}}>info@trescorp.biz</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-phone"></i> Phone: <a href ="tel:+96824699904" style={{color:'blue', textDecoration:'underline'}}>+968 24699904</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-clock"></i> Working Hours: Sun-Thu 9:00
                    AM - 6:00 PM
                  </p>
                </div>
                <div
                  className="card bg-white-800  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                   style={{ height: "400px" }}
                >
                  <h2
                    className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-yellow-500"
                    style={{ textAlign: "center" }}
                  >
                    Oman Office
                  </h2>
                    
                  <h1 className="text-xl font-extrabold text-gray-900 mb-4">
                  Trescorp Alliance Pte Ltd ( LNG Office)
                  </h1>
                  <p className="text-xs leading-relaxed">
                  Excellence Office Building 
Complex No. 225 Building No. 1/564
Way No. 5508 , 113
Bousher Muscat, Sultanate of Oman


                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-envelope"></i> Email: <a href ="mailto:info@trescorp.biz" style={{color:'blue', textDecoration:'underline'}}>info@trescorp.biz</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-phone"></i> Phone: <a href ="tel:+96824699904" style={{color:'blue', textDecoration:'underline'}}>+968 24699904</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-clock"></i> Working Hours: Sun-Thu 9:00
                    AM - 6:00 PM
                  </p>
                </div>
                <div
                  className="card bg-white-800  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                   style={{ height: "400px" }}
                >
                  <h2
                    className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-yellow-500"
                    style={{ textAlign: "center" }}
                  >
                    UAE Office
                  </h2>
                    
                  <h1 className="text-xl font-extrabold text-gray-900 mb-4">
                  Trescorp Alliance DMCC
                  </h1>
                  <p className="text-xs leading-relaxed">
                   OneJLT Jumeirah Lake Towers, Dubai, UAE
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-envelope"></i> Email: <a href ="mailto:info@trescorp.biz" style={{color:'blue', textDecoration:'underline'}}>info@trescorp.biz</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-phone"></i> Phone: <a href ="tel:+971543551528" style={{color:'blue', textDecoration:'underline'}}>+971 543551528</a>
                  </p>
                  <p className="text-xs leading-relaxed mt-4">
                    <i className="fas fa-clock"></i> Working Hours: Mon-Fri 9:00
                    AM - 6:00 PM
                  </p>
                </div>
            </div>
            </div>
              </div>
            </div>
          </section>
          <div className="p-4 md:w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.262993288052!2d103.8527292!3d1.2844818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190932680f41%3A0x50da132f16dc7865!2sTrescorp%20Alliance%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1720613804167!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          <section className="container text-gray-600 body-font mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-0 md:my-0">
            
            
              <div className="p-10 md:w-full">
              <h2  style={{textAlign:'center',width:'100%', fontWeight:'bolder', fontSize:'1.5rem'}}> Contact Us</h2>
                <form
                  onSubmit={handleSubmit}
                  className="p-0 max-w-lg lg:mx-0 sm:mx-auto"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-blue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone No.
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-blue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-blue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-blue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-oval inline-flex items-center mt-4 font-bold"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};
export default Contact;
