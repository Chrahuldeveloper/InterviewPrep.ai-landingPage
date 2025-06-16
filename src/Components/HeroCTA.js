import { Link } from "react-router-dom";

const HeroCTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#007AFF] to-[#7A36F2] text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
          Ready to make interviews easier?
        </h1>
        <p className="mb-8 text-lg md:text-xl text-white/90">
          Join thousands of successful job seekers who are using InterviewQ to
          land their dream jobs. Start preparing smarter, not harder.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 mb-12 md:flex-row">
          <button className="bg-white text-[#007AFF] font-semibold px-6 py-3 rounded-xl text-lg shadow hover:opacity-90 transition">
            Add to Chrome - Free
          </button>
          <span className="mt-2 text-sm text-white/90 md:mt-0">
            ✓ No account required ✓ Works instantly ✓ 100% Free
          </span>
        </div>
        <hr className="w-full max-w-4xl mx-auto mb-10 border-white/30" />
        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">10,000+</h2>
            <p className="mt-1 text-white/80">Happy Users</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p className="mt-1 text-white/80">User Rating</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="mt-1 text-white/80">Questions Generated</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-7">
        <Link to={"/privacy"}>
          <p className="underline text-white font-semibold cursor-pointer">
            Privacy Policy
          </p>
        </Link>
      </div>
    </section>
  );
};

export default HeroCTA;
