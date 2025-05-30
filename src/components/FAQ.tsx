import  { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: 'Do I need to register as self-employed in the UK?',
      answer:
        "Yes, you must register as self-employed with HMRC by 5 October in your business's second tax year. For example, if you start your business in July 2024, you must register by 5 October 2025.",
    },
    {
      question: 'When do I need to submit my Self Assessment tax return?',
      answer:
        'Self Assessment tax returns must be submitted by 31 January following the end of the tax year. The UK tax year runs from 6 April to 5 April. Late submissions incur penalties.',
    },
    {
      question: 'What expenses can I claim as a freelancer?',
      answer:
        'You can claim expenses that are wholly and exclusively for business purposes, including office supplies, equipment, travel costs, professional development, and a portion of home office costs if you work from home.',
    },
    {
      question: 'How much National Insurance do I need to pay?',
      answer:
        'As self-employed, you pay Class 2 National Insurance (£3.45/week if profits exceed £6,515) and Class 4 National Insurance (9% on profits between £12,570-£50,270, then 2% above that).',
    },
    {
      question: 'Do I need to charge VAT?',
      answer:
        'You must register for VAT if your taxable turnover exceeds £85,000 in a 12-month period. You can voluntarily register if below this threshold, which may be beneficial for reclaiming VAT on business expenses.',
    },
    {
      question: 'Can I use Taxaxed tools for free?',
      answer:
        'Yes! We offer free tax calculators, templates, and basic guides. Our premium resources provide more detailed guidance and advanced tools for complex tax situations.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto md:px-0 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#110047] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common UK tax questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg "
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 font-semibold text-[#110047] hover:text-[#E862FF] flex justify-between items-center"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-[#E862FF]' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
