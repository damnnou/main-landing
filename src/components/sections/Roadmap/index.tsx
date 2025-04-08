import RoadmapPhase, { RoadmapPhaseProps } from "./RoadmapPhase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SplitType from "split-type";
import gsap from "gsap";
const phases: RoadmapPhaseProps[] = [
    {
        phase: 1,
        title: "Command with Natural Language",
        description: "The first step toward AI-driven DeFi",
        shield: "Launching Q2 2025",
        infoCards: [
            {
                title: "Effortless Interactions:",
                description: "Move liquidity, execute trades and orders with simple commands",
            },
            {
                title: "Instant Insights:",
                description: "AI-powered analytics at your fingertips",
            },
            {
                title: "Onboarding the Masses:",
                description: "Making DeFi intuitive and more accessible",
            },
            {
                title: "Adaptive Strategies:",
                description: "AI learns from market conditions to optimize your trades and liquidity moves",
            },
        ],
    },
    {
        phase: 2,
        title: "AI Agents Take Over",
        description: "The real automation begins",
        shield: "H2 2025",
        infoCards: [
            {
                title: "AI-Managed Liquidity:",
                description: "Dynamic pool balancing and impermanent loss protection",
            },
            {
                title: "Smart Fee Adjustments:",
                description: "AI adapts trading fees based on market volatility",
            },
            {
                title: "Portfolio Optimization:",
                description: "AI detects idle assets and suggests high-yield strategies",
            },
            {
                title: "Automated Pool Creation:",
                description: "AI designs liquidity curves and fee structures",
            },
        ],
    },
    {
        phase: 3,
        title: "The AI DEX Governor",
        description: "AI doesn't just assist, it runs the DEX",
        shield: "H1 2026",
        infoCards: [
            {
                title: "The First AI CEO in DeFi:",
                description: "AI is in full control, evolving the DEX into a self-optimizing powerhouse",
            },
            {
                title: "Autonomous Decision-Making:",
                description: "Orchestrating AI agents to maximizing efficiency and profitability",
            },
            {
                title: "Liquidity Reallocation:",
                description: "AI detects high-performing pools and moves funds dynamically",
            },
            {
                title: "Strategic Governance:",
                description: "AI sets policies, optimizes rewards, and prevents inefficiencies",
            },
        ],
    },
];

export function Roadmap() {
    const swiperRef = useRef(null);
    const [activePhase, setActivePhase] = useState(0);

    const handleSlideChange = (index: number) => {
        if (swiperRef.current) {
            (swiperRef.current as any).slideTo(index);
        }
        setActivePhase(index);
    };

    useEffect(() => {
        const aiTitle = new SplitType("#roadmap-title");
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
                    trigger: "#roadmap-section",
                    start: "top 80%",
                    end: "top 30%",
                },
            }
        );

        gsap.fromTo(
            "#roadmap-swiper",
            {
                opacity: 0,
                y: 100,
            },
            {
                duration: 0.5,
                opacity: 1,
                y: 0,
                ease: "power3.inOut",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: "#roadmap-section",
                    start: "top 60%",
                    end: "top 30%",
                },
            }
        );
    }, []);

    return (
        <section id="roadmap-section" className="flex flex-col gap-4 items-center lg:items-start w-full">
            <h1 id="roadmap-title" className="text-h1 max-lg:text-center">
                Roadmap
            </h1>
            <div className="flex gap-4 md:gap-4 overflow-x-auto w-fit max-lg:mx-auto pb-2">
                {phases.map((_, index) => (
                    <button
                        key={index}
                        className={`text-h2 whitespace-nowrap relative transition-colors ${
                            index === activePhase ? "text-black" : "text-secondary"
                        }`}
                        onClick={() => handleSlideChange(index)}
                    >
                        {index + 1} Phase
                        {index === activePhase && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[1px] lg:h-[3px] bg-black" />
                        )}
                    </button>
                ))}
            </div>

            <Swiper
                modules={[Autoplay, Navigation]}
                centeredSlides={false}
                onSwiper={(swiper) => {
                    (swiperRef.current as any) = swiper;
                    swiper.on("slideChange", () => setActivePhase(swiper.activeIndex));
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
                navigation
                id="roadmap-swiper"
                className="w-full lg:!overflow-visible group"
            >
                {phases.map((props, index) => (
                    <SwiperSlide key={index} className="px-2 sm:px-0">
                        <RoadmapPhase {...props} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
