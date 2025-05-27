
import { Link } from 'react-router-dom';
// import TaxIllustration from './illustrations/TaxIllustration';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#FFFFDD] via-white to-gray-50">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#110047] mb-6 animate-fade-in">
              UK Tax Made Simple
            </h1>
            <h1 className="text-4xl  lg:text-5xl font-bold text-[#E862FF] mb-6 animate-fade-in">
              Expert Tax, Accounting, and Financial Support
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up">
              Making tax and accounting knowledge accessible, digestible, and engaging 
              for UK freelancers, self-employed individuals, and small business owners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up">
              <button className="bg-[#E862FF] hover:bg-[#e862ffcc] text-white px-8 py-3 text-lg rounded-md transition">
                Start Learning
              </button>
              <Link to="/tools">
                <button className="border border-[#110047] text-[#110047] hover:bg-[#110047] hover:text-white px-8 py-3 text-lg rounded-md transition">
                  Explore Tools
                </button>
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg animate-fade-in">
              {/* <TaxIllustration /> */}
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center mt-12">
          <div className="animate-bounce text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
