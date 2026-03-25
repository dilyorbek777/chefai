import { InsightsData } from "@/constants"
import CustomImage from "./customImage"
import { ArrowRightIcon } from "lucide-react"

const Insights = () => {
    return (
        <div className="w-full bg-extra p-16 relative mt-16 max-md:px-5" id="insights">
            <div className="overlay w-[600px] h-[203px] max-md:w-[300px] max-md:h-[101px] rounded-r-img bg-extra absolute -top-[50px] -z-10 left-0" />

            <div className="flex items-center max-w-[1720px] my-16 mx-auto px-16 max-md:px-12  gap-7 text-center mt-10 max-lg:flex-col">
                <h1 className="text-syne">Healthy Insights</h1>
                <span className="text-[50px] max-lg:hidden">{"/"}</span>
                <p className="text-start max-lg:text-center">Latest News, Expert Blogs, <br /> and Nutritional Learning</p>
            </div>

            <div className="flex items-center justify-between gap-5 max-md:px-0 px-16 max-lg:flex-col">
                {InsightsData.map((insight, index) => (
                    <div key={index} className="w-[437px] min-h-[700px] max-md:min-h-[600px] max-sm:w-full flex flex-col items-start justify-between bg-white rounded-2xl p-6">
                        <CustomImage img={insight.img} alt={insight.title} className="w-[437px] h-[437px] object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl my-5 font-semibold mb-2 max-md:text-xl"> {insight.title}</h2>
                        <button className="flex items-center gap-2">Read article <ArrowRightIcon /></button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Insights