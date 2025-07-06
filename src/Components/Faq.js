import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How does the extension generate questions?",
    answer:
      "Our AI analyzes job descriptions to auto-generate tailored interview questions.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes, the Chrome extension is completely free to use with all core features.",
  },
  {
    question: "Does it work on all job sites?",
    answer:
      "It works on most job boards like LinkedIn, Indeed, and company career pages.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We don’t store any personal data or job application details.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className="bg-[#080813] text-white px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#151a2f] border border-[#2c2f45] rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left"
              onClick={() => toggle(idx)}
            >
              <span>{item.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 text-sm text-gray-400 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-400 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
