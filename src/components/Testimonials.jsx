import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Pushpendra Sen', feedback: 'Thrilled to transition from student to banker with PW Skills!' },
    { id: 2, name: 'Ishan Vats', feedback: 'Landed my dream job as a financial analyst thanks to PW Skills!' },
    { id: 3, name: 'Sagriti Jaiswal', feedback: 'Secured a Cashier role at YES Bank, thanks to the BFSI training!' },
  ];

  return (
    <div className="testimonials">
      <h2>Success Stories</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;