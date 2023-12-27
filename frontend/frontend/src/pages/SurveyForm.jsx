// SurveyForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

 // Replace with the actual path

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    nationality: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/survey/postsurvey', formData);

      if (response.status === 201) {
        console.log('Form submitted successfully');
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle unexpected errors
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Survey Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/** Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/** Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender:
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/** Nationality */}
        <div>
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-600">
            Nationality:
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/** Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/** Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/** Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address:
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/** Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
