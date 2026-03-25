import { BenefitsData } from "@/constants"
import CustomImage from "./customImage"

const Benefits = () => {
    return (
        <div className="w-full px-16 py-16 max-lg:px-5 " id="benefits">
            <div className="flex items-center max-w-[1720px] my-16 mx-auto px-16 max-md:px-12  gap-7 text-center mt-10 max-lg:flex-col">
                <h1 className="text-syne">Benefits</h1>
                <span className="text-[50px] max-lg:hidden">{"/"}</span>
                <p className="text-start max-lg:text-center">Get meal plans tailored to your unique<br />dietary needs, preferences, and goals,<br /> ensuring a balanced and enjoyable diet.</p>
            </div>
            <div className="grid grid-cols-4 gap-4 px-16 max-lg:px-1 max-md:flex max-md:flex-col  items-center justify-center max-[1440px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
                {BenefitsData.map((benefit) => (
                    <div key={benefit.id} className="w-[394px] h-[500px] flex items-center justify-center ">
                        {benefit.text && <div className={`w-[394px] flex items-center justify-center rounded-max gap-4 h-full flex-col px-12 py-24 ${benefit.id === 1 ? "bg-secondary" : ""} ${benefit.id === 7 ? "bg-primary-400 text-secondary" : ""}`}>
                            <h2 className="text-4xl">{benefit.title}</h2>
                            <p className="text-xl">{benefit.text}</p>
                        </div>}

                        {benefit.img && <CustomImage className="w-full h-full object-cover rounded-max " img={benefit.img} alt={benefit.id.toString()} />}
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Benefits