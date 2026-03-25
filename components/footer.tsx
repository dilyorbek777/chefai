"use client";

import { useCallback } from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { siteDetails } from '@/constants';

const Footer = () => {
    const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId) || document.querySelector(href);

            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }

    }, []);


    const footerLinks = {
        explore: [
            { name: 'Recipes', href: '#recipes' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Insights', href: '#insights' },
        ],
        support: [
            { name: 'FAQ', href: '#faq' },
            { name: 'Assistance', href: '#need' },
            { name: 'Demo', href: '#demo' },
            { name: 'How It Works', href: '#how-it-works' },
        ]
    };

    return (
        <footer className="bg-[#1a2e25] text-white rounded-t-[48px] mt-20 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="max-w-[1440px] px-8 pt-20 pb-10 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Section - Spans 4 columns */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold tracking-tight text-[#d9f99d]">
                                {siteDetails.siteName}
                            </span>
                        </div>
                        <p className="text-[#a1b3aa] text-sm leading-relaxed max-w-sm">
                            {siteDetails.description}
                        </p>
                        <div className="flex gap-5 mt-8">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 rounded-full border border-[#2d4a3e] text-[#a1b3aa] hover:text-[#d9f99d] hover:border-[#d9f99d] transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections - Spans 2 columns each */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Explore</h4>
                        <ul className="space-y-4">
                            {footerLinks.explore.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-[#a1b3aa] text-sm hover:text-[#d9f99d] hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-[#a1b3aa] text-sm hover:text-[#d9f99d] hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter - Spans 4 columns */}
                    <div className="lg:col-span-4 bg-[#233d31] p-8 rounded-3xl border border-[#2d4a3e]">
                        <h4 className="text-[#d9f99d] font-semibold mb-2 text-xl">Stay Healthy</h4>
                        <p className="text-[#a1b3aa] text-sm mb-6">Join our newsletter for weekly wellness tips.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-[#1a2e25] border border-[#2d4a3e] rounded-full py-4 px-6 text-sm text-white focus:ring-2 focus:ring-[#d9f99d] outline-none transition-all"
                            />
                            <button className="absolute right-2 top-2 bg-[#d9f99d] p-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/20">
                                <ArrowRight className="w-5 h-5 text-[#1a2e25]" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-[#2d4a3e] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#a1b3aa] text-xs">
                        © {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
