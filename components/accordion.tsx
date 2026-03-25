"use client";

import { ArrowDown, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "How does the AI create personalized meal plans?",
        answer: "Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.",
    },
    {
        question: "How does the grocery delivery service work?",
        answer: "Once your meal plan is set, we generate a smart shopping list. You can choose to have these items delivered from local partners directly to your door at a scheduled time.",
    },
    {
        question: "Are there options for budget-conscious users?",
        answer: "Absolutely. Our AI can prioritize seasonal ingredients and bulk-buy options to ensure your meal plan stays within your specified weekly budget.",
    },
    {
        question: "How can I access nutrition education and healthy eating tips?",
        answer: "You can find a dedicated 'Education' tab in the app, featuring articles, video tutorials, and daily tips curated by certified nutritionists.",
    },
];

export const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className={`w-full flex items-center gap-6 p-6 rounded-[32px] transition-all duration-300 text-left ${isOpen ? 'bg-[#f1f3ee]' : 'bg-transparent border-transparent'
                    }`}
            >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border border-[#2d4a3e] flex items-center justify-center transition-colors ${isOpen ? 'bg-[#d9f99d] border-none' : 'bg-white'
                    }`}>
                    {isOpen ? (
                        <ArrowDown className="w-6 h-6 text-[#2d4a3e]" />
                    ) : (
                        <ArrowUp className="w-6 h-6 text-[#2d4a3e]" />
                    )}
                </div>
                <span className="text-[#2d4a3e] font-bold text-lg md:text-xl">
                    {question}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pl-[88px] pr-12 pb-8 mt-3">
                            <p className="text-[#4a6358] leading-relaxed text-lg max-w-2xl">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
