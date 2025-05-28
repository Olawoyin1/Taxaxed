import FAQSection from "../components/FAQ"
import Hero from "../components/Hero"
import ServicesHighlightSection from "../components/Highlight"
import Loader from "../utils/Loader"

const Home = () => {
  return (
    <div>
        <Hero />
        <ServicesHighlightSection />
        <FAQSection />
        <Loader />
    </div>
  )
}

export default Home