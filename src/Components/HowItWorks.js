import React from "react";

const steps = [
  {
    step: "1",
    title: "Apply for a job",
    desc: "Browse job listings on any platform and find positions you're interested in applying for.",
    iconBg: "linear-gradient(180deg, #00AEEF 0%, #2D8EFF 100%)",
    stepBg: "bg-[#00AEEF]",
    emoji: "🎯",
  },
  {
    step: "2",
    title: "Extension scans the job description",
    desc: "Our AI automatically analyzes the job requirements, skills, and company information.",
    iconBg: "linear-gradient(180deg, #B857F9 0%, #FD4680 100%)",
    stepBg: "bg-[#FD4680]",
    emoji: "🔍",
  },
  {
    step: "3",
    title: "Get instant interview questions",
    desc: "Receive tailored questions specific to the role, helping you prepare effectively.",
    iconBg: "linear-gradient(180deg, #3AC569 0%, #19C37D 100%)",
    stepBg: "bg-[#19C37D]",
    emoji: "⚡",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 py-20 bg-white">
      <h2 className="mb-4 text-4xl font-bold text-center">How It Works</h2>
      <p className="max-w-2xl mx-auto mb-12 text-center text-gray-500">
        Get interview-ready in three simple steps. Our extension does all the heavy lifting for you.
      </p>

      <div className="flex flex-col items-center justify-center max-w-6xl gap-6 mx-auto md:flex-row">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full px-6 py-8 text-center transition bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md md:w-1/3"
          >
            <div
              className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
              style={{ background: item.iconBg }}
            >
              <span className="text-2xl">{item.emoji}</span>
            </div>

            <div
              className={`w-8 h-8 text-sm font-bold text-white rounded-full flex items-center justify-center mb-2 ${item.stepBg}`}
            >
              {item.step}
            </div>

            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
