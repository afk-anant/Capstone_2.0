import React from 'react';
import CourseCard from './CourseCard';
import '../styles/styles.css';

const FeaturedCourses = () => {
  const Course1 = [
    {
      id: 1,
      title: 'Data Science With Generative AI Course',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/ce8d0b63-4312-428b-9e87-4f7fe5e15171.jpeg',
      label: 'Premium Offerings Available',
      description: 'Job Assistance | Ticket to fast-tracked career growth',
      note: 'Classes Starting soon - Enroll Now!',
    },
    {
      id: 2,
      title: 'Data Analytics Course',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/efa2dac5-6170-43ca-a43d-e9248eb6a9c5.jpeg',
      label: 'Premium Offerings Available',
      description: 'Job Assistance | Gain Data Analytics Expertise',
      note: 'Classes Starting soon - Enroll Now!',
    },
    {
      id: 3,
      title: 'Data Analytics Course - Hinglish',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/7e299146-ae5d-41eb-a104-781a7121a284.png',
      label: 'Premium Offerings Available',
      description: 'Job Assistance | Gain Data Analytics Expertise',
      note: 'EMI Options Available',
    }
  ];

  const Course2 = [
    {
      id: 4,
      title: 'Full Stack Development with AI',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/b04479c6-b341-45d5-af4b-8902481921a3.jpeg',
      label: 'Premium Offerings Available',
      description: 'Job Assitance | Gain Full Stack Development Expertise',
      note: 'Registration Started',
    },
    {
      id: 5,
      title: 'DevOps and Cloud Computing Course',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/7ee0dfac-0f69-4aa8-8e08-3f4883a14998.png',
      label: 'Premium Offerings Available',
      description: 'Mastering the art of streamlining software development',
      note: 'Limited seats available!',
    },
    {
      id: 6,
      title: 'UI UX Design Course',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/209ddaad-c486-4485-afb8-b46c04208122.jpeg',
      label: 'Premium Offerings Available',
      description: 'Job Assitance | Unlock the secrets of seamless UI design',
      note: 'Registration Started',
    }
  ];

  const Course3 = [
    {
      id: 7,
      title: 'Finance, Tax, and Accounting Course',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/1ecbdc1d-5866-4044-b474-1d1a6231c324.jpeg',
      label: 'Premium Offerings Available',
      description: 'Master finance with PWC expert-led training',
      note: 'Registration Started',
    },
    {
      id: 8,
      title: 'Stock Market For Beginners',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/2856b566-711c-4a0c-b061-35d02fa44e81.jpeg',
      label: 'Beginner Friendly',
      description: 'Learn stock market basics for confident investing',
      note: 'Batch starting this month!',
    },
    {
      id: 9,
      title: 'Financial Modeling Course',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/124cf43f-2fc8-4097-855b-129d2f76ff9f.png',
      label: 'Premium Offerings Available',
      description: 'Industry-Relevant Financial Modeling Certification',
      note: 'Registration Started',
    }
  ];

  return (
    <div className="featured-container">
      <h2 className="featured-heading">Our Courses</h2>

      <h3 className="featured-subheading">Data Science & Analytics</h3>
      <div className="course-grid">
        {Course1.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <h3 className="featured-subheading">Software Development</h3>
      <div className="course-grid">
        {Course2.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <h3 className="featured-subheading">Banking & Finance</h3>
      <div className="course-grid">
        {Course3.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;