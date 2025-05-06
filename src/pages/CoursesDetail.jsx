// src/pages/CoursesDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CoursesDetail = () => {
  const { id } = useParams();
  const courseDetails = {
    1: { title: 'Web Development', description: 'Learn to build websites from scratch.', price: '$99' },
    2: { title: 'Data Science', description: 'Analyze data and make informed decisions.', price: '$129' },
    3: { title: 'Machine Learning', description: 'Dive into the world of AI and ML.', price: '$149' },
  };

  const course = courseDetails[id];

  return (
    <div>
      {course ? (
        <>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>Price: {course.price}</p>
          <button>Enroll Now</button>
        </>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default CoursesDetail;