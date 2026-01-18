import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "What is HallaMaghreb ?",
    answer: "HallaMaghreb is a social platform designed to connect visitors and locals in Morocco during major events such as AFCON 2025 and the FIFA World Cup 2030, by forming small groups based on shared interests and activities."
  },
  {
    question: "How are groups created ?",
    answer: "Groups are formed using basic information provided during onboarding, such as interests, travel style, and preferred activities. A smart matching system helps create balanced and compatible groups."
  },
  {
    question: "Is the platform safe ?",
    answer: "Yes. Safety is a top priority. Every user creates a profile, and the platform includes reporting and moderation features to ensure a respectful and secure environment."
  },
  {
    question: "Who suggests the activities ?",
    answer: "Activities can be suggested by users themselves, as well as by the platform through intelligent recommendations based on group preferences and location."
  },
  {
    question: "Is HallaMaghreb free to use ?",
    answer: "The core features of HallaMaghreb are free to use. Some premium services or special activities may be introduced in the future, always on an optional basis."
  },
  {
    question: "What makes HallaMaghreb different from other platforms ?",
    answer: "HallaMaghreb focuses on real human connections: small groups, shared experiences, and meaningful interactions, all tailored specifically for major events in Morocco."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        
        {/* Left */}
        <div className="faq__intro">
          <h2>
            <span className="lwla">F</span>requently <br />
            <span className="tania">A</span>sked <br />
            <span className="Talta">Q</span>uestions
          </h2>
          <p>Do you have any questions?</p>
        </div>

        {/* Right */}
        <div className="faq__list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq__question">
                <h4>{item.question}</h4>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
