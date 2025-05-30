import FAQSection from "../components/FAQ"
import FeaturesSection from "../components/Features"
import Hero from "../components/Hero"
import ServicesHighlightSection from "../components/Highlight"
import StatsSection from "../components/Stats"
import WhyChooseTaxaxed from "../components/WhyUs"

const Home = () => {
  return (
    <div>
        <Hero />
        <ServicesHighlightSection />
        <WhyChooseTaxaxed />
        <FeaturesSection />
        <StatsSection />
        <FAQSection />
    </div>
  )
}

export default Home