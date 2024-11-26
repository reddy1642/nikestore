import React, { useState } from "react";
import { Link } from "react-router-dom";
import './contact.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Message sent successfully!');
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setFormStatus('Please fill out all fields!');
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <nav>
          <ul>
            <li>
              <Link to="/product">Home</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/about">About</Link>
              <Link to="/support">Support</Link>
              <Link to="/contact" className="active">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="contact-form-section">
        <h1>Contact Us</h1>
        <p>If you have any questions or concerns, feel free to reach out to us by filling out the form below.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message"
            />
          </div>
          <button type="submit">Send Message</button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </section>
    </div>
  );
}

export default ContactPage;
