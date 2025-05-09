import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="image-container">
        <img src={course.image} alt={course.title} className="course-image" />
      </div>
      <div className="course-content">
        <p className="course-label">{course.label}</p>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <p className="course-note">{course.note}</p>
        <div className="course-buttons">
          <button className="btn btn-explore">Explore</button>
          <button className="btn btn-buy">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;