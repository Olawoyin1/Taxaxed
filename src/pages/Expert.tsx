import FAQSection from "../components/FAQ";

const TalkToExpertSection = () => {
  const benefits = [
    'Personalized tax advice for your situation',
    'Qualified UK tax professionals',
    '30-minute consultation sessions',
    'Same-day responses to urgent queries'
  ];

  return (
    <>
    
    <section className="py-20 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Talk to a Tax Expert
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get personalized guidance from qualified UK tax professionals. Whether you have a specific question or need comprehensive tax planning advice, our experts are here to help.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white/80 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#110047] hover:bg-white/90 px-6 py-3 text-lg rounded-md font-medium transition">
                Book Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#110047] px-6 py-3 text-lg rounded-md font-medium transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 6a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Quick Response</h3>
              </div>
              <p className="text-white/80">
                Get expert answers to your tax questions within 24 hours, or book a live consultation for complex issues.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l8-4-8-4-8 4 8 4zm0 0v4" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Qualified Professionals</h3>
              </div>
              <p className="text-white/80">
                All our tax experts are qualified accountants with extensive experience in UK self-employment and small business taxation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Multiple Contact Options</h3>
              </div>
              <p className="text-white/80">
                Reach us via email, live chat, or book a video consultation that fits your schedule and preference.
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>

    <div>
      <FAQSection />
    </div>
    </>
  );
};

export default TalkToExpertSection;
