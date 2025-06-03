import { IoTrendingUpSharp } from "react-icons/io5";
import { HiOutlineUsers as Users } from "react-icons/hi";
import { IoShieldOutline } from "react-icons/io5";
import { GoClock as Clock} from "react-icons/go";

const whyChooseUs = [
  {
    title: "UK Tax Specialists",
    description: "Our team consists of qualified UK tax professionals with years of experience",
    icon: IoShieldOutline,
  },
  {
    title: "Always Up-to-Date",
    description: "We stay current with the latest HMRC updates and tax law changes",
    icon: IoTrendingUpSharp,
  },
  {
    title: "Proven Track Record",
    description: "Over 10,000 freelancers trust us with their tax education and planning",
    icon: Users,
  },
  {
    title: "Time-Saving Tools",
    description: "Our calculators and templates save you hours of manual work",
    icon: Clock,
  },
];

const WhyChooseTaxaxed = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#481488] mb-4">
            Why 1000+ UK Freelancers Choose Taxaxed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another tax website. We're your partners in financial success.
          </p>
        </div>

        {/* Grid of Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group h-full border border-transparent hover:border-[#6C2BD9]/30 transition-all duration-300 hover:shadow hover:scale-105 rounded-xl p-6 text-center bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#481488] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTaxaxed;
