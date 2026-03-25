import { PricingData } from "@/constants"
import CustomImage from "./customImage"

const Pricing = () => {
    return (

        <div className="w-full  p-16 max-md:px-5  " id="pricing">
            <div className="flex items-center max-w-[1720px] my-16 mx-auto px-16 max-md:px-12  gap-7 text-center mt-10 max-lg:flex-col">
                <h1 className="text-syne">Pricing</h1>
                <span className="text-[50px] max-lg:hidden">{"/"}</span>
                <p className="text-start max-lg:text-center">Find your perfect plan: <br /> tailored pricing for every need</p>
            </div>
            <div className="relative max-w-[1720px] mx-auto max-md:px-0 px-16">
                <CustomImage img="/bgp.jpg" alt="Pricing" className="w-full max-lg:hidden h-[600px] object-cover rounded-button -z-10 absolute left-0 top-20" />

                <div className="flex max-md:p-1 items-center justify-center max-lg:flex-col ">


                    {PricingData.map((plan) => (
                        <div key={plan.id} className="w-[350px] my-10  min-h-[700px] flex border bg-white font-sans  even:bg-secondary border-primary   last:rounded-l-none first:rounded-r-none rounded-card items-center cursor-help even:scale-110 even:translate-y-[-5px] transition-all duration-300 justify-center px-12 py-6 gap-2  flex-col even:rounded-card max-lg:first:rounded-card max-lg:last:rounded-card max-lg:w-[400px] max-sm:w-full">
                            <div >
                                <div className="space-y-2 mb-3">
                                    <p className="text-xl text-center">{plan.name}</p>
                                    <h2 className="text-center">{plan.price}</h2>
                                </div>
                                <ul className="space-y-3 mx-auto w-fit my-4">
                                    {plan.features.map((feature, index) => (
                                        <li className="list-disc ml-2" key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="border-t border-primary my-4"></div>
                                <p className="text-primary text-xl max-md:text-lg"><span className="font-semibold">Best for: </span>{plan.sub}</p>
                            </div>
                            <button className="my-4 mx-auto text-center btn-primary">{plan.btn}</button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Pricing