
import { Link } from 'react-router-dom';
// import TaxIllustration from './illustrations/TaxIllustration';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFFFDD] via-white to-gray-50">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#110047] mb-4 animate-fade-in">
              UK Tax Made Simple
            </h1>
            <h1 className="text-3xl  lg:text-5xl font-bold text-[#E862FF] mb-4 animate-fade-in">
              Expert Tax, Accounting, and Financial Support
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up">
              Making tax and accounting knowledge accessible, digestible, and engaging 
              for UK freelancers, self-employed individuals, and small business owners.
            </p>

            <div className="flex sm:flex-row gap-4 justify-center lg:justify-start mb-7 md:mb-0 animate-slide-up">
                <Link to='/talk-to-an-expert'>
                    <button className="bg-[#E862FF] hover:bg-[#e862ffcc] text-white text-sm px-7 md:px-8 py-3 md:text-lg rounded-md transition">
                        Talk To An Expert
                    </button>
                </Link>
                
              <Link to="/services">
                <button className="border border-[#110047] text-[#110047] hover:bg-[#110047] hover:text-white px-7 md:px-8 py-3 text-sm md:text-lg rounded-md transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg animate-fade-in">
              {/* <TaxIllustration /> */}
              <img src="https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740" alt="" />
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
