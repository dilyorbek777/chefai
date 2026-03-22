
import { FaCirclePlay } from "react-icons/fa6"
import CustomImage from "./customImage"

const Demo = () => {
    return (
        <div className="py-16">
            <div className="max-w-[1720px] mx-auto px-16 max-[1100px]:px-12 py-15">
                <div className="flex items-center  gap-7  text-center mt-10 max-lg:flex-col">
                    <h1 className="text-syne text-5xl">Demo</h1>
                    <span className="text-[50px] max-lg:hidden">{"/"}</span>
                    <p className="text-start text-xl max-lg:text-center">See how it works:  your personalized <br /> meal planning journey</p>
                </div>
                <div className="mt-10 border border-primary p-10 max-md:p-5 border-r-0 rounded-l-max flex items-center max-lg:flex-col max-lg:border-0 justify-center gap-10">
                    <div className="relative">
                        <CustomImage img="/demo.png" alt="Demo" className="border border-primary rounded-max p-10 h-auto w-[720px]" />
                        <FaCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/70 text-6xl cursor-pointer" />
                    </div>
                    <h1 className="text-end text-5xl w-1/2 max-lg:w-full max-lg:text-center ">Every meal is a chance to nourish your body, inspire your mind, and feed your soul.</h1>
                </div>

            </div>
        </div>
    )
}

export default Demo