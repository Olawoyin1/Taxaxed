
import {
  FaBook,
  FaChartLine,
  FaUserTie,
  FaReceipt,
  FaBalanceScale,
  FaPiggyBank,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const servicesHighlight = [
  {
    title: "Bookkeeping Services",
    description:
      "Stay on top of your business finances with organized, accurate, and up-to-date bookkeeping tailored for UK regulations.",
    icon: FaBook,
    link: "/bookkeeping",
    bgColor: "#110047", // Electric Violet
  },
  {
    title: "Accounting Services",
    description:
      "Professional accounting for freelancers and small businesses—covering annual accounts, reporting, and compliance.",
    icon: FaChartLine,
    link: "/accounting",
    bgColor: "#481488", // Rich Indigo
  },
  {
    title: "Tax Advisory & Planning",
    description:
      "Strategic tax advice to help you reduce liabilities, plan for the future, and make the most of available allowances.",
    icon: FaUserTie,
    link: "/tax-advisory",
    bgColor: "#E862FF", // Deep Purple
  },
  {
    title: "VAT Registration & Filing",
    description:
      "Support with VAT registration, threshold evaluation, and accurate quarterly submissions to HMRC.",
    icon: FaReceipt,
    link: "/vat-services",
    bgColor: "#5A189A", // Royal Purple
  },
  {
    title: "HMRC Compliance Support",
    description:
      "Expert help navigating Self Assessment, Making Tax Digital (MTD), and staying compliant with HMRC requirements.",
    icon: FaBalanceScale,
    link: "/compliance",
    bgColor: "#4C1D95", // Indigo
  },
  {
    title: "Tax-Saving Opportunities",
    description:
      "Discover allowances, deductions, and reliefs you’re entitled to—helping you legally reduce your UK tax bill.",
    icon: FaPiggyBank,
    link: "/tax-saving",
    bgColor: "#3C096C", // Deep Violet
  },
];

const ServicesHighlightSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold ">
            Streamline Your Finances with One Solution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 ">
          {servicesHighlight.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-[60px] p-10 min-h-[250px] w-full flex flex-col justify-start items-start transition-all duration-300"
                style={{ backgroundColor: service.bgColor }}
              >
                {/* Header with icon and arrow */}
                <div className="flex justify-between items-center w-full">
                  
                    <Icon size={32} className="text-white" />
                  
                  <Link
                    to={service.link}
                    className="flex items-center justify-center h-[55px] w-[55px] rounded-3xl bg-white bg-opacity-20"
                  >
                    <GoArrowRight size={28} className="transition-all duration-300" />
                  </Link>
                </div>

                {/* Text Content */}
                <div className="flex text-white flex-col w-full">
                  <h3 className="text-[18px] font-semibold leading-[26px] mb-[14px]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[24px] font-normal text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;
