import React from "react";

const IconCards = () => {
  const features = [
    {
      title: "Saves prep time",
      desc: "No more hours spent researching potential questions. Get instant, relevant questions in seconds.",
      bg: "linear-gradient(180deg, #00AEEF 0%, #2D8EFF 100%)",
      emoji: "⏰",
    },
    {
      title: "Tailored to the job",
      desc: "Every question is specifically generated based on the job description and requirements.",
      bg: "linear-gradient(180deg, #B857F9 0%, #FD4680 100%)",
      emoji: "🎯",
    },
    {
      title: "Boosts confidence",
      desc: "Walk into interviews feeling prepared and confident with relevant practice questions.",
      bg: "linear-gradient(180deg, #3AC569 0%, #19C37D 100%)",
      emoji: "💪",
    },
    {
      title: "Built for students & freshers",
      desc: "Designed specifically for new graduates and entry-level job seekers starting their careers.",
      bg: "linear-gradient(180deg, #FC5C4C 0%, #F95C2B 100%)",
      emoji: "🎓",
    },
  ];

  return (
    <div className="bg-[#f8fbff] py-20 px-4">
      <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl">Why Choose InterviewQ?</h2>
      <p className="max-w-xl mx-auto mb-12 text-center text-gray-500">
        Join thousands of students and job seekers who are landing their dream jobs with better interview preparation.
      </p>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {features.map((item, idx) => (
          <div key={idx} className="p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg">
            <div
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full"
              style={{ background: item.bg }}
            >
              {item.emoji}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCards;
