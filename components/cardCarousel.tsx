"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CARDS } from "@/constants";
import CustomImage from "./customImage";

export default function CardCarousel() {
    const [items, setItems] = useState(CARDS);
    const [index, setIndex] = useState(1);

    // Auto-play Timing (5 seconds)
    useEffect(() => {
        const timer = setInterval(() => handleNext(), 5000);
        return () => clearInterval(timer);
    }, [items]);

    const handleNext = () => {
        setItems((prev) => {
            const newArr = [...prev];
            const first = newArr.shift();
            if (first) newArr.push(first);
            return newArr;
        });
        setIndex((prev) => (prev % CARDS.length) + 1);
    };

    const handleBack = () => {
        setItems((prev) => {
            const newArr = [...prev];
            const last = newArr.pop();
            if (last) newArr.unshift(last);
            return newArr;
        });
        setIndex((prev) => (prev === 1 ? CARDS.length : prev - 1));
    };

    return (
        <div className="w-full bg-extra p-16 relative " id="how-it-works">
            <div className="overlay w-[600px] h-[203px] max-md:w-[300px] max-md:h-[101px] rounded-r-img bg-extra absolute -bottom-[50px] -z-10 left-0" />

            <div className="flex items-center max-w-[1720px] my-16 mx-auto px-16 max-md:px-12  gap-7 text-center mt-10 max-lg:flex-col">
                <h1 className="text-syne">How it works</h1>
                <span className="text-[50px] max-lg:hidden">{"/"}</span>
                <p className="text-start max-lg:text-center">Step into the world of hassle-free meal <br /> planning with our easy 3-step process</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between px-16 max-md:p-1  min-h-[700px] max-w-[1720px] mx-auto rounded-3xl overflow-hidden">
                {/* Left Content Section */}
                <div className="w-full md:w-1/2 space-y-2">
                    <h2 className="font-medium">0{index}</h2>
                    <h2>{items[0].title}</h2>
                    <p className="text-primary ">{items[0].content}</p>

                    <div className="flex gap-4 pt-6">
                        <button onClick={handleBack} className="p-4 border border-primary btn-trsp rounded-full hover:bg-gray-200 transition">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={handleNext} className="p-4 bg-secondary rounded-full hover:bg-secondary-400 border border-primary transition">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="text-lg  font-syne font-medium pt-4">0{index}/0{CARDS.length}</div>
                </div>

                {/* Right Stacked Image Section */}
                <div className="relative w-full md:w-[500px] h-[500px] mt-10 md:mt-0 ">
                    <AnimatePresence mode="popLayout">
                        {items.map((card, i) => (
                            <motion.div
                                key={card.id}
                                layout
                                initial={{ scale: 0.8, opacity: 0, x: 50 }}
                                animate={{
                                    scale: 1 - i * 0.05,
                                    opacity: 1 - i * 0.4,
                                    x: i * -50,
                                    zIndex: CARDS.length - i,
                                    rotate: i * -10
                                }}
                                exit={{ x: -100, opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-img  shadow-xl rotate-12"
                            >
                                <div className="w-full h-full">
                                    {/* Replace with <Image /> from next/image */}
                                    <CustomImage img={card.img} alt={card.title} className="w-full rounded-img  h-full object-cover" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
