import { FaComments, FaEnvelope, FaPhone, FaUsers, FaClock, FaSearch, FaQuestionCircle, FaBookOpen } from 'react-icons/fa';

const supportOptions = [
  {
    icon: <FaComments size={24} />,
    title: 'Live Chat',
    description: 'Get instant help from our support team during business hours',
    availability: 'Mon-Fri, 9am-6pm',
    responseTime: 'Within 5 minutes',
    action: 'Start Chat'
  },
  {
    icon: <FaEnvelope size={24} />,
    title: 'Email Support',
    description: 'Send us a detailed message and we\'ll get back to you promptly',
    availability: '24/7',
    responseTime: 'Within 24 hours',
    action: 'Send Email'
  },
  {
    icon: <FaPhone size={24} />,
    title: 'Phone Support',
    description: 'Speak directly with our tax experts for complex queries',
    availability: 'Mon-Fri, 10am-4pm',
    responseTime: 'Immediate',
    action: 'Call Now'
  },
  {
    icon: <FaUsers size={24} />,
    title: 'Community Forum',
    description: 'Connect with other freelancers and get peer-to-peer support',
    availability: '24/7',
    responseTime: 'Varies',
    action: 'Join Forum'
  }
];

const quickHelp = [
  {
    icon: <FaQuestionCircle size={32} />,
    title: 'FAQ',
    description: 'Find answers to common questions',
    count: '50+ questions'
  },
  {
    icon: <FaBookOpen size={32} />,
    title: 'Help Center',
    description: 'Comprehensive guides and tutorials',
    count: '100+ articles'
  },
  {
    icon: <FaSearch size={32} />,
    title: 'Search Knowledge Base',
    description: 'Search through all our resources',
    count: '1000+ results'
  }
];

const Support = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-yellow-300/10 via-white to-purple-100 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-rich-indigo mb-6">Support & Help</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get expert help and join our community of UK entrepreneurs. We're here to support your tax and accounting journey every step of the way.
          </p>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-14">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">Quick Help</h2>
            <p className="text-xl text-gray-600">Find answers instantly with our self-service options</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickHelp.map((item, index) => (
              <div
                key={index}
                className="text-center border border-gray-200 hover:border-violet-200 rounded-xl p-6 hover:shadow transition-transform"
              >
                <div className="w-16 h-16 bg-electric-violet/10 text-violet-900 mx-auto mb-4 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-rich-indigo">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-sm text-gray-500 mb-4">{item.count}</p>
                <button className="w-full bg-violet-900 text-white py-2 rounded-md hover:bg-electric-violet/90 transition">
                  Access Now
                </button>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQ..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-electric-violet rounded-md"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-electric-violet text-white px-4 py-2 rounded-md hover:bg-electric-violet/90">
              Search
            </button>
          </div> */}
        </div>
      </section>

      {/* Personal Support */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Get Personal Support</h2>
            <p className="text-gray-600">Choose the support method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportOptions.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow transition">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-900 to-indigo-00 text-white text-electric-violet flex items-center justify-center rounded-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rich-indigo">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  <div className="flex items-center"><FaClock className="mr-2" />Available: {item.availability}</div>
                  <div className="flex items-center"><FaComments className="mr-2" />Response: {item.responseTime}</div>
                </div>
                <button className="w-full bg-violet-900 text-white py-2 rounded-md hover:bg-electric-violet/90 transition">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">Send Us a Message</h2>
            <p className="text-gray-600">Can't find what you're looking for? Drop us a line and we'll help you out.</p>
          </div>
          <div className="bg-white border p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" placeholder="Enter your first name" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-electric-violet" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" placeholder="Enter your last name" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-electric-violet" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" placeholder="Enter your email address" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-electric-violet" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" placeholder="What can we help you with?" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-electric-violet" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={6} placeholder="Please describe your question or issue in detail..." className="w-full border p-3 rounded-md focus:ring-2 focus:ring-electric-violet"></textarea>
              </div>
              <button className="w-full bg-violet-900 text-white py-3 rounded-md hover:bg-electric-violet/90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Support;
