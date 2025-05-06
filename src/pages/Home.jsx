// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseCategories from '../components/CourseCategories';
import FeaturedCourses from '../components/FeaturedCourses';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CourseCategories />
      <FeaturedCourses />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default Home;