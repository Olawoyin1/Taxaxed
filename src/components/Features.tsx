import {
  FaBookOpen,
  FaCalculator,
  FaComments,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaBookOpen,
    title: "Educational Resources",
    description:
      "Access comprehensive guides, tutorials, and expert insights specifically designed for UK tax requirements and regulations.",
    gradient: "from-purple-500 to-blue-900",
  },
  {
    icon: FaCalculator,
    title: "Professional Tools",
    description:
      "Use our advanced calculators, templates, and planning tools to accurately manage your tax obligations and financial planning.",
    gradient: "from-yellow-500 to-purple-600",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance Assurance",
    description:
      "Stay compliant with the latest HMRC regulations and tax law changes with our up-to-date guidance and expert verification.",
    gradient: "from-cream-500 to-purple-600",
  },
  {
    icon: FaChartLine,
    title: "Financial Growth",
    description:
      "Optimize your tax strategy to maximize savings and grow your business with our proven financial planning methodologies.",
    gradient: "from-orange-500 to-yellow-600",
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description:
      "Connect with a thriving community of UK freelancers and small business owners sharing experiences and insights.",
    gradient: "from-violet-500 to-gray-300",
  },
  {
    icon: FaComments,
    title: "Expert Consultation",
    description:
      "Get personalized advice from qualified UK tax professionals when you need specialized guidance for complex situations.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#481488] mb-4">
            Your Complete UK Tax Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From learning the basics to expert consultation, we provide
            everything UK freelancers and small business owners need to
            confidently manage their tax obligations and grow their business.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group border-2 border-gray-100 hover:border-[#6C2BD9]/30 bg-white rounded-2xl shadow-sm hover:shadow transition-all duration-500  overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0`}
                ></div>

                <div className="p-6 text-center relative z-10">
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow hover:shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#481488] group-hover:text-[#6C2BD9] transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative background accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#6C2BD9]/5 to-transparent rounded-bl-full z-0" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#481488]/5 to-transparent rounded-tr-full z-0" />
              </div>
            );
          })}
        </div>

        {/* Key Metrics */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-[#6C2BD9]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#481488] mb-4">
              Why 10,000+ UK Professionals Trust Taxaxed
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-[#6C2BD9]">£2.4M+</div>
                <div className="text-gray-600">Tax Savings Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#6C2BD9]">98%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#6C2BD9]">24hr</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
