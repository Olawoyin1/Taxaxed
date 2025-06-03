// React Icons
import {
  FaCheck,
  // FaBookOpen,
  // FaCalculator,
  // FaRegCommentDots,
  FaUsers,
  // FaFileAlt,
  FaBolt,
  FaStar,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';



import { GoBook } from "react-icons/go";
import { AiOutlineLineChart } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { FaReceipt, FaPiggyBank } from "react-icons/fa";
import { MdBalance } from "react-icons/md";

const Services = () => {
 const services = [
  {
    icon: GoBook,
    title: "Making Tax Digital",
    description:
      "We help businesses stay compliant with Making Tax Digital by offering expert support and software tools that meet HMRC's digital requirements.",
    features: [
      "MTD-compliant bookkeeping software",
      "Expert setup and training",
      "Ongoing digital compliance checks",
      "Support for quarterly submissions",
    ],
    link: "/bookkeeping",
    bgColor: "#110047", // Electric Violet
  },
  {
    icon: AiOutlineLineChart,
    title: "Accounting Services",
    description:
      "Professional accounting solutions for freelancers and small businesses, including annual accounts, financial reporting, and compliance support.",
    features: [
      "Annual accounts preparation",
      "Self-assessment filing",
      "Corporation tax support",
      "Year-end reporting",
    ],
    link: "/accounting",
    bgColor: "#481488", // Rich Indigo
  },
  {
    icon: GrUserExpert,
    title: "Tax Advisory & Planning",
    description:
      "Strategic tax planning and expert advice to minimize liabilities, optimize financial outcomes, and plan for business growth.",
    features: [
      "Personalized tax strategy",
      "Retirement and pension planning",
      "Capital gains optimization",
      "Allowances and reliefs guidance",
    ],
    link: "/tax-advisory",
    bgColor: "#E862FF", // Deep Purple
  },
  {
    icon: FaReceipt,
    title: "VAT Registration & Filing",
    description:
      "Expert assistance with VAT threshold evaluation, registration, and accurate quarterly submissions to HMRC.",
    features: [
      "VAT registration support",
      "Quarterly VAT returns",
      "MTD for VAT integration",
      "Flat rate and standard VAT advice",
    ],
    link: "/vat-services",
    bgColor: "#5A189A", // Royal Purple
  },
  {
    icon: MdBalance,
    title: "HMRC Compliance Support",
    description:
      "Comprehensive support to help you stay compliant with Self Assessment, Making Tax Digital, and HMRC’s ongoing requirements.",
    features: [
      "Self Assessment filing",
      "Digital record-keeping",
      "Deadline and penalty avoidance",
      "Audit preparation support",
    ],
    link: "/compliance",
    bgColor: "#4C1D95", // Indigo
  },
  {
    icon: FaPiggyBank,
    title: "Tax-Saving Opportunities",
    description:
      "Uncover deductions, reliefs, and smart strategies to help you save money and reduce your overall UK tax liability legally.",
    features: [
      "Expense deduction tracking",
      "Tax-efficient investment advice",
      "Marriage and capital gains allowances",
      "Freelancer-specific tax tips",
    ],
    link: "/tax-saving",
    bgColor: "#3C096C", // Deep Violet
  },
];

  const whyChooseReasons = [
    {
      title: 'HMRC Compliant',
      description: 'All our guidance follows current HMRC regulations and is updated with every tax law change.',
      icon: FaShieldAlt,
      illustration: 'https://img.freepik.com/free-vector/flat-worried-woman-have-list-credit-debts-overdue-bills-girl-reading-letter-from-collection-agency-about-financial-problems-loans-unpaid-tax-calculation-payment-expenses-concept_88138-805.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740'
    },
    {
      title: 'Expert Team',
      description: 'Our content is created and reviewed by qualified UK tax professionals and chartered accountants.',
      icon: FaUsers,
      illustration: 'https://img.freepik.com/premium-vector/black-people-team-illustration_1149263-15862.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740'
    },
    {
      title: 'Instant Results',
      description: 'Get immediate answers and calculations to make informed decisions about your tax planning.',
      icon: FaBolt,
      illustration: 'https://img.freepik.com/free-vector/app-data-concept-illustration_114360-7834.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740'
    },
    {
      title: 'Always Updated',
      description: 'Stay current with the latest tax law changes and HMRC updates delivered directly to you.',
      icon: FaChartLine,
      illustration: 'https://img.freepik.com/free-vector/transfer-files-concept-landing-page_23-2148321609.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/30 via-violet-900/70 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-violet/20 via-transparent to-transparent"></div>
        <div className="container mx-auto  relative">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-violet-900/10 rounded-full text-electric-violet font-medium mb-6">
              <FaStar className="mr-2" size={16} />
              Trusted by 1000+ UK professionals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-rich-indigo mb-6 leading-tight">
              Transform Your
              <span className="block text-electric-violet">Tax Journey</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              From beginner guides to expert consultations, discover the complete suite of services designed to make UK tax simple, accessible, and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <button className="bg-violet-900 flex items-center justify-center hover:bg-violet-800/90 text-white px-8 py-4 rounded-xl text-sm md:text-lg">
                  Explore Services                <BsArrowRight className="ml-2" size={20} />
                </button>
              </Link>
              <Link to="/talk-to-an-expert">
              <button className="bg-white text-indigo-900 hover:border-0 hover:bg-indigo-900 hover:text-white px-8 py-4 rounded-xl text-sm md:text-lg">
                Book Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every service designed with one goal: making UK tax management effortless for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="h-full bg-white border border-gray-200 hover:border-violet-900/30 transition-all duration-300 hover:shadow-lg rounded-2xl overflow-hidden">
                <div className="p-7">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-violet-900 to-indigo-00 rounded">
                      <service.icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-rich-indigo mb-3">
                    {service.title}
                  </div>
                  <div className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <FaCheck className="text-electric-violet" size={10} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.link} className='block mt-4'>
                    <button className="w-full flex items-center justify-center bg-gradient-to-br from-violet-900 to-indigo-900 hover:bg-indigo-900/90 text-white py-3 rounded-lg font-medium transition-all duration-300">
                      Learn More      <BsArrowRight className="ml-2" size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-white">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">
              Why 1000+ Professionals Choose Taxaxed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the trusted choice for UK tax management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-start space-x-6 group">
                <img src={reason.illustration} alt="" className='h-90' />
                {/* Number Circle */}

                <div className='flex gap-3'>
                    <div className=" flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white rounded-full flex items-center justify-center font-bold text-xl shadow group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center space-x-4 mb">
                        <h3 className="text-2xl font-bold text-rich-indigo group-hover:text-electric-violet transition-colors duration-300">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-br from-violet-900 to-indigo-900 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Ready to Transform Your Tax Experience?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">£2.4M+</div>
                <div className="text-white/80">Tax Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24hr</div>
                <div className="text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1K+</div>
                <div className="text-white/80">Happy Users</div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-indigo-900 hover:bg-white/90 py-4 px-8 rounded-xl font-semibold text-lg">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;