"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is Terra Energy?",
    answer:
      "Terra Energy is a fictional energy company focused on innovation, responsible progress, and sustainable energy solutions for the future.",
  },
  {
    question: "What does Terra Energy do?",
    answer:
      "Terra Energy explores renewable energy projects, clean technology, and responsible approaches to help build a more sustainable future.",
  },
  {
    question: "What types of projects does Terra Energy work on?",
    answer:
      "Our featured projects include solar energy initiatives and wind energy innovation designed to support a cleaner energy landscape.",
  },
  {
    question: "How does Terra Energy support sustainability?",
    answer:
      "We believe sustainability starts with thoughtful decisions, collaboration, and innovative ideas that consider long-term environmental impact.",
  },
  {
    question: "How can I learn more about Terra Energy?",
    answer:
      "You can explore our About, Projects, Sustainability, and News pages to learn more about our values, initiatives, and perspectives.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div className="faq-heading">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 className="section-title">
            Good questions lead to better energy.
          </h2>
          <p className="section-description">
            Find out more about Terra Energy, our projects, and our approach
            to a more sustainable future.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <article className="faq-item" key={item.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}