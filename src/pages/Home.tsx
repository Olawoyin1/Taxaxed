import FAQSection from "../components/FAQ"
import Hero from "../components/Hero"
import Loader from "../utils/Loader"

const Home = () => {
  return (
    <div>
        <Hero />
        <FAQSection />
        <Loader />
    </div>
  )
}

export default Home