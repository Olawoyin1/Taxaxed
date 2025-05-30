// React Icons
import {
  FaCheck,
  FaBookOpen,
  FaCalculator,
  FaRegCommentDots,
  FaUsers,
  FaFileAlt,
  FaBolt,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: FaBookOpen,
      title: 'Tax Education Hub',
      description: 'Comprehensive guides and resources covering all aspects of UK tax for freelancers and small businesses.',
      features: ['Self-employment tax guides', 'VAT registration help', 'Expense claiming advice', 'Regular updates'],
      link: '/services/tax-education-hub',
    },
    {
      icon: FaCalculator,
      title: 'Tax Tools & Calculators',
      description: 'Professional-grade calculators and tools to help you estimate taxes and plan your finances.',
      features: ['Income tax calculator', 'National Insurance calculator', 'VAT calculator', 'Expense tracker'],
      link: '/services/tax-tools',
    },
    {
      icon: FaFileAlt,
      title: 'Templates & Resources',
      description: 'Downloadable templates and checklists to streamline your tax and accounting processes.',
      features: ['Invoice templates', 'Expense sheets', 'Tax checklists', 'Record keeping guides'],
      link: '#',
    },
    {
      icon: FaRegCommentDots,
      title: 'Expert Support',
      description: 'Get personalized advice from qualified tax professionals when you need it most.',
      features: ['One-on-one consultations', 'Email support', 'Priority response', 'Custom guidance'],
      link: '#',
    },
    {
      icon: FaUsers,
      title: 'Community Access',
      description: 'Join our thriving community of UK freelancers and small business owners.',
      features: ['Discussion forums', 'Networking events', 'Peer support', 'Success stories'],
      link: '#',
    },
    {
      icon: FaBolt,
      title: 'Premium Resources',
      description: 'Advanced tools and in-depth guides for complex tax situations and business growth.',
      features: ['Advanced calculators', 'Detailed guides', 'Video tutorials', 'Priority updates'],
      link: '#',
    }
  ];

  const whyChooseReasons = [
    {
      title: 'HMRC Compliant',
      description: 'All our guidance follows current HMRC regulations and is updated with every tax law change.',
      icon: FaShieldAlt,
      illustration: '🛡️'
    },
    {
      title: 'Expert Team',
      description: 'Our content is created and reviewed by qualified UK tax professionals and chartered accountants.',
      icon: FaUsers,
      illustration: '👥'
    },
    {
      title: 'Instant Results',
      description: 'Get immediate answers and calculations to make informed decisions about your tax planning.',
      icon: FaBolt,
      illustration: '⚡'
    },
    {
      title: 'Always Updated',
      description: 'Stay current with the latest tax law changes and HMRC updates delivered directly to you.',
      icon: FaChartLine,
      illustration: '📈'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-rich-indigo via-electric-violet/10 to-soft-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-violet/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-electric-violet/10 rounded-full text-electric-violet font-medium mb-6">
              <FaStar className="mr-2" size={16} />
              Trusted by 10,000+ UK professionals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-rich-indigo mb-6 leading-tight">
              Transform Your
              <span className="block text-electric-violet">Tax Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              From beginner guides to expert consultations, discover the complete suite of services designed to make UK tax simple, accessible, and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-electric-violet hover:bg-electric-violet/90 text-white px-8 py-4 rounded-xl text-lg">
                Explore Services
                <FaArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-rich-indigo text-rich-indigo hover:bg-rich-indigo hover:text-white px-8 py-4 rounded-xl text-lg">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rich-indigo mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every service designed with one goal: making UK tax management effortless for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="h-full bg-white border border-gray-200 hover:border-electric-violet/30 transition-all duration-300 hover:shadow-lg rounded-2xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-electric-violet/10 rounded-xl">
                      <service.icon className="text-electric-violet" size={28} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-rich-indigo mb-3">
                    {service.title}
                  </div>
                  <div className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-4 h-4 bg-electric-violet/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <FaCheck className="text-electric-violet" size={10} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.link}>
                    <button className="w-full bg-rich-indigo hover:bg-rich-indigo/90 text-white py-3 rounded-xl font-medium transition-all duration-300">
                      Learn More
                      <FaArrowRight className="ml-2" size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rich-indigo mb-6">
              Why 10,000+ Professionals Choose Taxaxed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the trusted choice for UK tax management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-violet to-rich-indigo rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-rich-indigo group-hover:text-electric-violet transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <div className="text-3xl">{reason.illustration}</div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-br from-electric-violet to-rich-indigo rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Ready to Transform Your Tax Experience?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">£2.4M+</div>
                <div className="text-white/80">Tax Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24hr</div>
                <div className="text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-white/80">Happy Users</div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-rich-indigo hover:bg-white/90 py-4 px-8 rounded-xl font-semibold text-lg">
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