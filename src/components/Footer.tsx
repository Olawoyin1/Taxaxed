import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Tax Calculator', href: '/tools#tax-calculator' },
    { name: 'Expense Tracker', href: '/tools#expense-tracker' },
    { name: 'Tax Guides', href: '/learn#tax-guides' },
    { name: 'Self-Employment', href: '/learn#self-employment' },
  ];

  const services = [
    { name: 'Tax Education Hub', href: '/services/tax-education-hub' },
    { name: 'Tax Tools', href: '/services/tax-tools' },
    { name: 'Expert Support', href: '/services#expert-support' },
    { name: 'Premium Resources', href: '/services#premium-resources' },
  ];

  const support = [
    { name: 'Help Center', href: '/support#help' },
    { name: 'FAQ', href: '/support#faq' },
    { name: 'Contact Us', href: '/support#contact' },
    { name: 'Ask an Expert', href: '/support#expert' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Careers', href: '#' },
  ];

  return (
    <footer className="bg-[#481488] text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info - spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link to="/" className="text-3xl font-bold text-[#6C2BD9] hover:text-[#7d3bff] transition-colors">
                Taxaxed
              </Link>
              <p className="text-[#FFF7E8]/80 mt-4 leading-relaxed">
                Making UK tax management simple and accessible for freelancers and small business owners.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#FFF7E8]/80">
                <FiMail className="text-lg" />
                <span className="text-sm">hello@taxaxed.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFF7E8]/80">
                <FiPhone className="text-lg" />
                <span className="text-sm">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFF7E8]/80">
                <FiMapPin className="text-lg" />
                <span className="text-sm">London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Social */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-medium text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-[#FFF7E8]/80 text-sm">
              © 2024 Taxaxed. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {company.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[#FFF7E8]/80 hover:text-[#6C2BD9] transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
