// SurveyList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from '../components/Logout'
import {Link} from "react-router-dom"

const SurveyList = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/survey/allsurvey');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error.message);
        // Handle error, e.g., show an error message to the user
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Survey Submissions</h1>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul>
          {submissions.map((submission) => (
            <li key={submission._id} className="mb-4">
              <strong>Name:</strong> {submission.name}<br />
              <strong>Gender:</strong> {submission.gender}<br />
              <strong>Nationality:</strong> {submission.nationality}<br />
              <strong>Email:</strong> {submission.email}<br />
              <strong>Phone Number:</strong> {submission.phone}<br />
              <strong>Address:</strong> {submission.address}<br />
              <strong>Message:</strong> {submission.message}
              <hr className="my-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
    <Link to='/survey'>create survey</Link>
    <Logout/>
    </>
  );
};

export default SurveyList;
