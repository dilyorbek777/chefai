import Image from "next/image"
import { FaCirclePlay } from "react-icons/fa6"

const Demo = () => {
    return (
        <div className="py-16">
            <div className="w-[1720px] mx-auto px-16 max-[1100px]:px-12 py-15">
                <div className="flex items-center  gap-7 text-center mt-10">
                    <h1 className="text-syne">Demo</h1>
                    <span className="text-[50px]">{"/"}</span>
                    <p className="text-start">See how it works:  your personalized <br /> meal planning journey</p>
                </div>
                <div className="mt-10 border border-primary p-10 border-r-0 rounded-l-max flex items-center justify-center gap-10">
                    <div className="relative">
                        <Image width={1020} height={900} src="/demo.png" alt="Demo" className="max-w-5xl border border-primary rounded-max p-10 h-auto" />
                        <FaCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/70 text-6xl cursor-pointer" />
                    </div>
                    <h1 className="text-end">Every meal is a chance to nourish your body, inspire your mind, and feed your soul.</h1>
                </div>

            </div>
        </div>
    )
}

export default Demo