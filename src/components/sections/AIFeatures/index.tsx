import React, { useEffect } from "react";
import FeatureCard from "@/components/common/FeatureCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import img20 from "@/assets/images/image 11020.png";
import img22 from "@/assets/images/image 11022.png";
import img23 from "@/assets/images/image 11023.png";
import SplitType from "split-type";
import gsap from "gsap";
import Link from "next/link";

const features = [
    {
        icon: img23.src,
        title: "Self-Regulating Infrastructure",
        description: "AI governs the entire DEX, orchestrating liquidity and trade execution autonomously",
    },
    {
        icon: img20.src,
        title: (
            <span>
                Proactive <br className="max-lg:hidden" /> Intelligence
            </span>
        ),
        description: "MAIN predicts market shifts before they happen, leveraging onchain data and offchain sentiment",
    },
    {
        icon: img22.src,
        title: "Optimized for Maximum Profitability",
        description: "MAIN automates listings and rebalances pools to maximize trading fees and rewards for stakeholders",
    },
];

const AIFeatures = () => {
    useEffect(() => {
        const aiTitle = new SplitType("#ai-the-core-title");
        gsap.fromTo(
            aiTitle.chars,
            {
                opacity: 0,
                filter: "blur(10px)",
            },
            {
                duration: 0.5,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power3.inOut",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "bottom 80%",
                    end: "bottom 30%",
                },
            }
        );
    }, []);

    return (
        <section id="ai-features-section" className="w-full snap-always snap-center flex flex-col gap-8 max-lg:items-center">
            <h1 id="ai-the-core-title" className="text-h1 max-lg:text-[40px] max-lg:text-center">
                AI at the Core,
                <br />
                <span className="text-secondary">Not Just an Add-On</span>
            </h1>

            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
                {features.map((feature, index) => (
                    <FeatureCard index={typeof window !== "undefined" && window.innerWidth < 768 ? 0 : index} key={index} {...feature} />
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <Link target="_blank" href="https://blog.main.exchange">
                    <PrimaryButton>Discover Our Vision</PrimaryButton>
                </Link>
            </div>
        </section>
    );
};

export default AIFeatures;
