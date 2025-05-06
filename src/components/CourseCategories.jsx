import React from 'react';

const CourseCategories = () => {
  const categories = [
    {
      title: "Data Science & Analytics",
      description: "Become expert at drawing intelligence from data and get noticed by top...",
      imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/bc14c559-783f-4f78-b7a7-7a638810c7da.svg"
    },
    {
      title: "Software Development Courses",
      description: "Upskill in-demand software & technology skills to attain desired jobs.",
      imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/e6cac10c-85fd-4315-9def-48aa3094a3e9.svg"
    },
    {
      title: "Programming Courses",
      description: "Build strong coding foundations for a high-paying technology career.",
      imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/8ea260a4-61a7-44de-940c-b242b2584872.svg"
    },
    {
      title: "Digital Marketing With AI",
      description: "Digital Marketing With AI.",
      imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/479347c6-ab68-4cf3-bc0a-b309a09781d1.svg"
    },
    {
      title: "Banking & Finance",
      description: "Up-skill yourself with relevant courses to become job ready in Banking...",
      imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/7362227c-33fe-4113-955f-d616e8e87a04.svg"
    },
    {
      title: "Cybersecurity Courses",
      description: "Master the art of safeguarding digital landscapes with hands-on training in...",
      imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/categoryIcon/d1f9fc19-2813-4d0e-8d3f-5c18b724dd1b.jpeg"
    }
  ];

  return (
    <section className="course-categories">
        <h2>Explore Our Categories</h2>
        <p>Choose your passion for excellence</p>

        <div className="categories-list">
            {categories.map((category, index) => (
            <div className="category-card" key={index}>
                <div className="category-content">
                <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                </div>
                <img src={category.imageUrl}/>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default CourseCategories;