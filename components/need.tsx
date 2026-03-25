
import { FaCirclePlay } from "react-icons/fa6"
import CustomImage from "./customImage"

const Need = () => {
    return (
        <div className="py-16">
            <div className="max-w-[1720px] mx-auto px-16 max-[1100px]:px-12 py-15">
                <div className="flex items-center  gap-7  text-center mt-10 max-lg:flex-col">
                    <h1 className="text-syne text-5xl">Need Assistance?</h1>
                    <span className="text-[50px] max-lg:hidden">{"/"}</span>
                    <p className="text-start text-xl max-lg:text-center">We’re here to help!</p>
                </div>
                <div className="mt-10 border border-primary p-10 max-md:p-5 border-r-0 rounded-l-max flex items-center max-lg:flex-col max-lg:border-0 justify-center gap-10">
                    <div className="relative">
                        <CustomImage img="/pic-n.png" alt="Demo" className="border border-primary rounded-max p-10 h-auto w-[720px]" />
                    </div>
                    <div className="w-1/2 max-lg:w-full flex-col flex justify-between gap-7 items-start">
                        <h1 className="text-start text-5xl   max-lg:text-center ">Have questions or need help with AIChefMate? Get the answers and assistance you need to make the most of your meal planning experience.</h1>
                        <button>Get support</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Need