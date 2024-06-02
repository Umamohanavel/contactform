import React, { useState } from 'react'
import './App.css';
function Contactform() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      }
  return (
    <div>
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input
                type="tel"
                name="phone"
                pattern='[0-9]'
                maxLength='10'
                value={formData.phone}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Email Address:</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Subject:</label>
                <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Message:</label> <br />
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='How can we help you? Feel free to get in touch!'
                required
                />       
                
            </div>
            <button type="submit" onChange={handleSubmit}>Send Message</button>
        </form>
    </div>
    </div>
  )
}

export default Contactform