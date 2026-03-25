import { TestimonialsData } from '@/constants'
import CustomImage from './customImage'
import { Quote } from 'lucide-react'

const Testimonials = () => {
    return (
        <div className="w-full  p-16  " id="testimonials">
            <div className="w-full h-screen absolute left-0 bottom-50 -z-1  blur-[200px] bg-gradient-to-br from-extra to-secondary mb-10"/>
            <div className="flex items-center max-w-[1720px] my-16 mx-auto px-16 max-md:px-12  gap-7 text-center mt-10 max-lg:flex-col">
                <h1 className="text-syne">Testimonials</h1>
                <span className="text-[50px] max-lg:hidden">{"/"}</span>
                <p className="text-start max-lg:text-center">Real stories from satisfied users:<br /> see  how our platform changes lives</p>
            </div>
            <div className="grid grid-cols-4 max-w-[1720px]  gap-10 px-16 max-md:p-1 items-center justify-center max-[1440px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
                {TestimonialsData.map((testim) => (
                    <div key={testim.id} className="flex items-end cursor-help hover:scale-105 hover:translate-y-[-5px] transition-all duration-300 justify-center px-12 py-6 gap-2 rounded-card flex-col bg-white/50 hover:bg-secondary ">
                        <h2 className="text-xl ">{testim.text}</h2>
                        <Quote className="w-5 h-5 mb-5 text-primary font-bold" />
                        <div className={`w-full flex items-center text-primary justify-start rounded-max gap-4 h-full`}>
                            <CustomImage className="w-12 h-12 object-cover rounded-max " img={testim.img} alt={testim.id.toString()} />
                            <p className="text-xl">{testim.name}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Testimonials