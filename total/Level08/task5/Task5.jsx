import React, { useState } from 'react';
import axios from 'axios';

function Task5() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Response:', response.data);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form after success
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className='bac'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Task5;
