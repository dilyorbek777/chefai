"use client"
import { faqData1, faqData2 } from "@/constants"
import { AccordionItem } from "./accordion"
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [openIndex1, setOpenIndex1] = useState<number | null>(0);

    return (
        <div className="py-16" id="faq">
            <div className="max-w-[1720px] mx-auto px-16 max-[1100px]:px-12 py-15 space-y-10">
                <div className="flex items-center  gap-7  text-center mt-10 max-lg:flex-col">
                    <h1 className="text-syne text-5xl">Frequently Asked Questions</h1>
                    <span className="text-[50px] max-lg:hidden">{"/"}</span>
                    <p className="text-start text-xl max-lg:text-center">Meal planning made easy: <br /> your questions, answered</p>
                </div>
                <div className="flex gap-5 flex-wrap ">
                    <div className="max-w-3xl mx-auto p-8 bg-white">

                        {faqData1.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex1 === index}
                                onClick={() => setOpenIndex1(openIndex1 === index ? null : index)}
                            />
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto p-8 bg-white">

                        {faqData2.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQ