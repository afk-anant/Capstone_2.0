import React from 'react';

const FAQs = () => {
  const faqs = [
    { ques: 'What is the refund policy?', ans: 'SkillHub operates a strict no-refunds policy for all purchased paid courses.' },
    { ques: 'I need to purchase a course. Whom should I contact ?', ans: 'Contact our counselors through the chat support on our website.' },
    { ques: 'I am not able to view my enrolled course. What to do/whom to contact ?', ans: 'To access your enrolled course, ensure you have logged in at learn.pwskills.com. If the course is still not visible, email your payment receipt to support@skillhub.com for assistance within 24 hours.' },
    { ques: 'How to enroll in a course?', ans: 'You can enroll by clicking on the course and following the instructions.' },
    { ques: 'What courses do you offer?', ans: 'We offer a variety of courses in tech, finance, healthcare, and more.' },
  ];

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4 className="faq-question">{faq.ques}</h4>
            <p className="faq-answer">{faq.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;