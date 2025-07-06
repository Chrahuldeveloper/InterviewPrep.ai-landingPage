import IconCards from "../Components/IconCards";
import HowItWorks from "../Components/HowItWorks";
import HeroCTA from "../Components/HeroCTA";
import Hero from "../Components/Hero";
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div className="bg-[#080813]">
      <div
        className="h-screen w-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.6),transparent_80%)]
 bg-no-repeat bg-cover"
      >
        <div className="flex items-center justify-between w-full px-6 py-4  md:px-20">
          <div className="flex items-center space-x-2 text-xl font-semibold">
            <span className="text-cyan-500">InterviewPrepAi</span>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-gray-100 px-4 py-2 rounded-md text-sm font-medium">
            Add to Chrome – Free
          </button>
        </div>
        <Hero />
        <HowItWorks />
        <IconCards />
        <Faq />
        <HeroCTA />
      </div>
    </div>
  );
};

export default Home;
