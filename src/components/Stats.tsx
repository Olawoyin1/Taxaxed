const StatsSection = () => {
const stats = [
  { number: "1000+", label: "UK Freelancers Helped" },
  { number: "500+", label: "HMRC & Tax Questions Answered" },
  { number: "100+", label: "One-to-One Consultations Booked" },
  { number: "24/7", label: "Community Support" },
];


  return (
    <section className="py-16 bg-[#481488]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-[#FFF7E8] text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
