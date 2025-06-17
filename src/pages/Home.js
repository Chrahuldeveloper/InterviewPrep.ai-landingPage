import IconCards from "../Components/IconCards";
import HowItWorks from "../Components/HowItWorks";
import HeroCTA from "../Components/HeroCTA";

const Home = () => {
  return (
    <div className="bg-[#fcfdff] min-h-screen">
      <div className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-200 md:px-20">
        <div className="flex items-center space-x-2 text-xl font-semibold">
          <div className="px-2 py-1 text-white bg-gradient-to-r from-[#6D6DFF] to-[#9747FF] rounded">
            IP
          </div>
          <span>InterviewPrepAi</span>
        </div>
        <button className="bg-gradient-to-r from-[#6D6DFF] to-[#9747FF] text-white px-4 py-2 rounded-md text-sm font-medium">
          Add to Chrome – Free
        </button>
      </div>

      <div className="flex flex-col items-center px-6 py-12 justify-evenly md:px-28 md:flex-row">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            💄 Now Live on Chrome Web Store
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Auto-generate <br />
            <span className="text-[#6D6DFF]">Interview</span>{" "}
            <span className="text-[#9747FF]">Questions</span> <br /> Instantly
          </h1>
          <p className="text-lg text-gray-600">
            Every time you Homely for a job, our extension has you covered. Get
            tailored interview questions based on the job description in
            seconds.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg text-lg">
              Add to Chrome – It's Free
            </button>
            {/* <button variant="outline" className="px-6 py-3 text-lg">
                            Watch Demo
                        </button> */}
          </div>
          <div className="flex items-center pt-2 space-x-2">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="w-5 h-5 bg-[#6366F1] rounded-full"></div>
              <div className="w-5 h-5 bg-[#10B981] rounded-full"></div>
              <div className="w-5 h-5 bg-[#EC4899] rounded-full"></div>
            </div>
            <p className="text-sm text-gray-500">1000+ students trust us</p>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">4.9/5 rating</span>
          </div>
        </div>

        <div className="w-full max-w-md p-6 mt-12 bg-white shadow-xl rounded-2xl md:mt-0 md:ml-16">
          <div className="flex items-center mb-4 space-x-3">
            <div className="bg-[#6D6DFF] text-white px-2 py-1 rounded font-bold">
              IQ
            </div>
            <div>
              <h3 className="text-sm font-semibold">InterviewPrep Extension</h3>
              <p className="text-xs text-gray-500">Job: Frontend Developer</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-3 rounded-md bg-blue-50">
              <p className="font-medium">Question 1:</p>
              <p className="text-sm text-gray-700">
                Explain the difference between React hooks and class components.
              </p>
            </div>
            <div className="p-3 rounded-md bg-purple-50">
              <p className="font-medium">Question 2:</p>
              <p className="text-sm text-gray-700">
                How would you optimize a React Homelication's performance?
              </p>
            </div>
            <div className="p-3 rounded-md bg-green-50">
              <p className="font-medium">Question 3:</p>
              <p className="text-sm text-gray-700">
                Describe your experience with responsive web design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />

      <IconCards />

      <div className="py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">What Our Users Say</h2>
        <p className="mb-12 text-gray-500">
          Real success stories from students and job seekers who aced their
          interviews.
        </p>
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          {[
            {
              name: "Sarah Chen",
              title: "Computer Science Graduate",
              initials: "SC",
              review:
                "Helped me prep faster before interviews! I got relevant questions for every job I Homelied to.",
            },
            {
              name: "Raj Patel",
              title: "Software Engineer",
              initials: "RP",
              review:
                "As a fresher, this extension gave me the confidence I needed. Landed my first job in tech!",
            },
            {
              name: "Emily Johnson",
              title: "Marketing Student",
              initials: "EJ",
              review:
                "The questions were spot-on! It's like having a personal interview coach built into my browser.",
            },
          ].map((user, idx) => (
            <div
              key={idx}
              className="p-6 text-left bg-white rounded-lg border-[1px] border-gray-300"
            >
              <div className="mb-2 text-yellow-500">★★★★★</div>
              <p className="italic text-gray-600">"{user.review}"</p>
              <div className="flex items-center mt-4 space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#6D6DFF] text-white flex items-center justify-center font-bold">
                  {user.initials}
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HeroCTA />
    </div>
  );
};

export default Home;
