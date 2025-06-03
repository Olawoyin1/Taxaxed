
import { Target, Users, Lightbulb, Shield, Award, TrendingUp, Heart, Globe, Rocket, Building, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to democratize tax knowledge and make it accessible to every UK entrepreneur and freelancer.',
      color: 'from-violet-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Community-First',
      description: 'Our community of freelancers, small business owners, and tax professionals drives everything we do.',
      color: 'from-purple-500 to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly innovate to make complex tax concepts simple and engaging for our users.',
      color: 'from-yellow-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We provide accurate, up-to-date information you can rely on for your financial decisions.',
      color: 'from-orange-500 to-purple-600'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Taxaxed Founded', description: 'Started with a vision to simplify UK tax for everyone' },
    { year: '2024', title: 'Grew to serve thousands of UK professionals', description: 'Reached our first milestone of helping 1,000 freelancers' },
    { year: '2024', title: '£500K Saved', description: 'Our community saved over £500K in tax through our guidance' },
    { year: '2024', title: '10,000+ Community', description: 'Grew to serve over 10,000 UK professionals' }
  ];

  const teamStats = [
    { icon: Award, number: '15+', label: 'Tax Experts', color: 'text-blue-600' },
    { icon: Globe, number: '10+', label: 'Years Combined Experience', color: 'text-green-600' },
    { icon: Heart, number: '1K+', label: 'Happy Users', color: 'text-purple-600' },
    { icon: TrendingUp, number: '£2.4M+', label: 'Tax Savings Generated', color: 'text-orange-600' }
  ];

  const platformFeatures = [
    {
      title: 'Cutting-Edge Technology',
      description: 'Built with the latest web technologies to ensure fast, reliable, and secure access to your tax information.',
      icon: Rocket,
      stats: '99.9% Uptime'
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Your data is protected with bank-level encryption and security measures that exceed industry standards.',
      icon: Shield,
      stats: 'ISO 27001 Certified'
    },
    {
      title: 'Continuous Innovation',
      description: 'We constantly evolve our platform based on user feedback and the latest tax regulations.',
      icon: TrendingUp,
      stats: 'Weekly Updates'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Our platform grows with you, from individual freelancers to large accounting firms.',
      icon: Building,
      stats: '100K+ Calculations/Day'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-violet-900/80 text-white to-soft-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-electric-violet/20 via-transparent to-transparent"></div>
        <div className="container mx-auto  relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-indigo-900 via-violet-900/80   rounded-full text-electric-violet font-medium mb-6">
                <Heart className="mr-2" size={16} />
                Made with passion for UK entrepreneurs
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-rich-indigo mb-6 leading-tight">
                Empowering UK 
                <span className="block text-electric-violet">Tax Success</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                We're not just another tax platform. We're your partners in building a thriving business, 
                one tax-savvy decision at a time.
              </p>
              <div className="flex gap-4">
                <button className="bg-violet-800 hover:bg-violet-900/90  text-sm md:text-lg  px-8 py-4 rounded-xl">
                  Join Our Mission
                </button>
                <button  className="text-sm md:text-lg bg-indigo-800 hover:bg-indigo-900 hover:text-white hover:border-0 px-8 py-4 rounded-xl">
                  Meet the Team
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-950 to-indigo-700 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-6">
                  {teamStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="mx-auto mb-2 text-white/80" size={32} />
                      <div className="text-2xl text-white font-bold">{stat.number}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 bg-white">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">Our Story</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="leading-relaxed">
                  Taxaxed was born from a simple frustration: tax information for UK freelancers and small business owners was scattered, complex, and often intimidating. We saw talented entrepreneurs spending countless hours trying to understand their tax obligations instead of focusing on growing their businesses.
                </p>
                <p className="text-lg leading-relaxed">
                  Founded in 2018, we set out to change this narrative. Our team of tax professionals, content creators, and developers came together with one audacious goal: to make tax knowledge as accessible and engaging as your favorite social media feed.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to serve thousands of UK freelancers, self-employed individuals, and small business owners, helping them navigate the complexities of tax with confidence and even a smile.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Our Journey</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white rounded-full flex items-center justify-center  font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-electric-violet font-semibold">{milestone.year}</div>
                    <h4 className="font-semibold text-rich-indigo">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">Our Values Drive Everything</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision, 
              every feature, and every interaction at Taxaxed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group hover:shadow transition-all duration-500  border-1  border-transparent hover:border-electric-violet/30 overflow-hidden">
                <div className="relative p-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-rich-indigo group-hover:text-electric-violet transition-colors duration-300">
                      {value.title}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Excellence Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">
              Built for Excellence, Designed for You
            </h2>
            <p className=" text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with user-centered design to deliver 
              an unparalleled tax management experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="group  p-10 transition-all duration-500  border border-gray-200   overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/5 to-rich-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4 ">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-900 to-indigo-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <feature.icon className="text-white" size={28} />
                      </div>
                      <div className="bg-gradient-to-br from-[#E862FF] to-[#110047] text-white  px-3 py-1 rounded-full text-sm font-semibold">
                        {feature.stats}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-rich-indigo group-hover:text-electric-violet transition-colors duration-300">
                      {feature.title}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="bg-gradient-to-br from-indigo-900 to-violet-700 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Proven Results Speak Louder Than Words</h3>
              <p className=" text-white/90">
                Our commitment to excellence is reflected in every metric that matters
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl  font-bold mb-2">99.8%</div>
                <div className="text-white/80">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl  font-bold mb-2">150+</div>
                <div className="text-white/80">Tax Guides Published</div>
              </div>
              <div className="text-center">
                <div className="text-4xl  font-bold mb-2">24/7</div>
                <div className="text-white/80">Platform Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl  font-bold mb-2">5-Star</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-white text-indigo-900 hover:bg-white/90 py-4 px-8 rounded-xl font-semibold text-sm md:text-lg">
                Experience Excellence Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-rich-indigo mb-4">
                Our Commitment to Your Success
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every feature, every guide, and every tool we create is designed with one purpose: 
                empowering UK professionals to achieve financial confidence and business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-rich-indigo mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">We stay ahead of tax law changes to keep you compliant and informed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-rich-indigo mb-2">User-Centric Design</h3>
                    <p className="text-gray-600">Every interface element is crafted based on real user feedback and behavior.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E862FF] to-[#110047] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-rich-indigo mb-2">Relentless Innovation</h3>
                    <p className="text-gray-600">We never stop improving, ensuring you always have access to the best tools.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-violet-900/20">
                <h3 className="text-2xl font-bold text-indigo mb-6 text-center">Join Our Growing Community</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-electric-violet mb-1">Active</div>
                    <div className="text-gray-600 text-sm">Community</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-electric-violet mb-1">Expert</div>
                    <div className="text-gray-600 text-sm">Support</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-electric-violet mb-1">Free</div>
                    <div className="text-gray-600 text-sm">Resources</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-electric-violet mb-1">24/7</div>
                    <div className="text-gray-600 text-sm">Access</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r text-sm md:text-lg from-violet-900 to-indigo-900 hover:opacity-90 text-white py-3 rounded-xl font-semibold">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;