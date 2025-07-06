import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Arjun Kumar",
    title: "CS Graduate, IIT Delhi",
    text: "This extension saved me hours of prep time! The questions were spot-on for my software engineering interviews.",
  },
  {
    name: "Priya Sharma",
    title: "Marketing Graduate",
    text: "As a fresher, I was nervous about interviews. This tool gave me the confidence I needed!",
  },
  {
    name: "Rahul Jain",
    title: "Data Science Student",
    text: "Got my first job offer after using this! The questions helped me prepare for exactly what they asked.",
  },
];

export default function TestimonialsAndFAQs() {
  return (
    <div className="bg-[#080813] text-white px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          What{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Students
          </span>{" "}
          Say
        </h2>
        <p className="text-gray-400 mt-2">
          Real feedback from job seekers who landed their dream roles
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto ">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#121a33] p-6 rounded-xl border border-[#1d2a45]"
          >
            <div className="flex items-center gap-1 mb-4 text-yellow-400">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
            </div>
            <p className="italic text-sm mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
