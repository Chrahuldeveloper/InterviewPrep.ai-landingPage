import { useState } from "react";
import { FaChevronDown, FaChrome } from "react-icons/fa";

export default function Hero() {
  const [questions] = useState([
    "Tell me about your experience with React...",
    "How would you handle state management...",
    "Describe your approach to debugging...",
  ]);

  return (
    <div className="  text-white flex flex-col items-center justify-center px-4 py-10">
      <span className="bg-[#2b1f4b] text-purple-300 text-sm px-4 py-1 rounded-full mb-4">
        🚀 Now Available for Chrome
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-center py-3 leading-tight">
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Auto-generate
        </span>{" "}
        Interview Questions <br />
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Instantly
        </span>
      </h1>

      <p className="text-gray-300 text-lg py-4 text-center max-w-xl ">
        Every time you apply for a job, our extension has you covered.
        <br />
        <span className=" bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Tailored questions. Instant prep. Confident interviews.
        </span>
      </p>

      <div className="py-10 flex flex-col md:flex-row gap-4">
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full flex items-center gap-2 text-white font-medium shadow-md">
          <FaChrome /> Add to Chrome – It's Free
        </button>
      </div>

      <div className="mt-10 bg-[#1a1f35] rounded-xl p-6 w-full max-w-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white font-semibold">
            Interview Questions Ready!
          </h2>
          <span className="text-xs text-green-400 bg-green-900 px-2 py-0.5 rounded">
            Generated
          </span>
        </div>
        <ul className="space-y-3">
          {questions.map((q, idx) => (
            <li
              key={idx}
              className="bg-[#2a2f45] px-4 py-2 rounded text-sm text-gray-200 flex items-center justify-between"
            >
              <span>
                {idx + 1}. {q}
              </span>
              <FaChevronDown className="text-gray-400 text-xs" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
