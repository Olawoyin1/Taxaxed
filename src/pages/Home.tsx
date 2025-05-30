import FAQSection from "../components/FAQ"
import FeaturesSection from "../components/Features"
import Hero from "../components/Hero"
import ServicesHighlightSection from "../components/Highlight"
import StatsSection from "../components/Stats"
import WhyChooseTaxaxed from "../components/WhyUs"
import Loader from "../utils/Loader"

const Home = () => {
  return (
    <div>
        <Hero />
        <ServicesHighlightSection />
        <WhyChooseTaxaxed />
        <FeaturesSection />
        <StatsSection />
        <FAQSection />
        <Loader />
    </div>
  )
}

export default Home