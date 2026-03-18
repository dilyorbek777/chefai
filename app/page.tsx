import CardCarousel from "@/components/cardCarousel"
import Demo from "@/components/demo"
import Header from "@/components/header"

const Home = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <div className="overlay w-[600px] h-[203px] max-md:w-[300px] max-md:h-[101px] rounded-l-img bg-extra absolute -bottom-[100px] -z-10 right-0" />
      </div >
      <Demo />
      <CardCarousel />
    </>
  )
}

export default Home