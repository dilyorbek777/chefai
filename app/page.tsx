import Benefits from "@/components/benefits"
import CardCarousel from "@/components/cardCarousel"
import Demo from "@/components/demo"
import Header from "@/components/header"
import Insights from "@/components/insights"
import Pricing from "@/components/pricing"
import Recipes from "@/components/recipes"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Need from "@/components/need"

const Home = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <div className="overlay w-[600px] h-[203px] max-md:w-[300px] max-md:h-[101px] rounded-l-img bg-extra absolute -bottom-[50px] -z-10 right-0" />
      </div >
      <Demo />
      <CardCarousel />
      <Benefits />
      <div className="relative">
        <Recipes />
        <Testimonials />
      </div>
      <Pricing />
      <Insights />
      <FAQ />
      <Need />
    </>
  )
}

export default Home