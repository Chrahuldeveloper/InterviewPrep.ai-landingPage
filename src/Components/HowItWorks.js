import {
  FaSuitcase,
  FaBolt,
  FaBullseye,
  FaClock,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="bg-[#080813] text-white px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          How It
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Works
          </span>{" "}
          Say
        </h2>
        <p className="text-gray-400 mt-2">
          Three simple steps to transform your job application process
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-12 mb-36 text-center">
        {[
          {
            icon: <FaSuitcase size={30} />,
            title: "1. Apply for a Job",
            desc: "Browse and apply to jobs on any platform - LinkedIn, Indeed, company websites, anywhere!",
          },
          {
            icon: <FaBolt size={30} />,
            title: "2. Extension Scans",
            desc: "Our AI automatically analyzes the job description, requirements, and company details.",
          },
          {
            icon: <FaBullseye size={30} />,
            title: "3. Get Questions",
            desc: "Receive personalized interview questions tailored specifically to that role and company.",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center max-w-xs mx-auto"
          >
            <div className="bg-gradient-to-tr from-purple-500 to-blue-400 p-4 rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Students & Freshers Love It */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Why Students &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Freshers
          </span>{" "}
          Love It
        </h2>
        <p className="text-gray-400 mt-2">
          Built specifically for the next generation of professionals
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: <FaClock size={24} />,
            title: "Saves Prep Time",
            desc: "No more hours of research. Get targeted questions in seconds.",
          },
          {
            icon: <FaBullseye size={24} />,
            title: "Tailored to Job",
            desc: "Questions specific to the role, company, and industry you're applying to.",
          },
          {
            icon: <FaShieldAlt size={24} />,
            title: "Boosts Confidence",
            desc: "Walk into interviews prepared and confident with relevant practice.",
          },
          {
            icon: <FaGraduationCap size={24} />,
            title: "Student-Friendly",
            desc: "Perfect for freshers entering the job market for the first time.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#151a2f] p-6 rounded-xl text-center">
            <div className="text-purple-400 mb-4 flex justify-center items-center">{item.icon}</div>
            <h4 className="text-md font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
