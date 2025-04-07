import FeatureCard from "@/components/common/FeatureCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export function AutomatedLiquidity() {
    useEffect(() => {
        const aiTitle = new SplitType("#automated-liquidity-title");
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
                    trigger: "#automated-liquidity-section",
                    start: "top 80%",
                    end: "top 30%",
                },
            }
        );

        const aiDescription = new SplitType("#automated-liquidity-description");

        gsap.from(aiDescription.words, {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateY(20px)",
            delay: 0.5,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#automated-liquidity-section",
                start: "top 80%",
                end: "top 30%",
            },
        });

        gsap.from("#automated-liquidity-shield", {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateY(20px)",
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#automated-liquidity-section",
                start: "top 80%",
                end: "top 30%",
            },
        });
    }, []);

    return (
        <section id="automated-liquidity-section" className="flex flex-col w-full text-white items-center lg:items-start">
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full min-w-[320px] py-8 gap-8 items-center lg:items-start">
                    <div className="flex">
                        <div id="automated-liquidity-shield" className="px-4 py-2 text-white roadmap-shield rounded-xl">
                            coming soon
                        </div>
                    </div>

                    <h1 id="automated-liquidity-title" className="text-h1  max-lg:text-center">
                        AI-Driven Mechanics
                    </h1>
                    <p id="automated-liquidity-description" className="text-body max-lg:text-center max-lg:max-w-[358px]">
                        Machine learning fine-tunes your strategy, adapting to market trends
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:items-start items-center gap-8 w-full py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    <FeatureCard
                        sm
                        index={0}
                        icon="https://dashboard.codeparrot.ai/api/image/Z-1h4-GYgKEKiAWD/img.png"
                        title="Smart Liquidity Management"
                        description="Auto-shifts liquidity for max returns"
                    />
                    <FeatureCard
                        sm
                        index={typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 1}
                        icon="https://dashboard.codeparrot.ai/api/image/Z-1h4-GYgKEKiAWD/img-2.png"
                        title={
                            <span>
                                Portfolio <br className="hidden" /> Insights
                            </span>
                        }
                        description="Recommends rebalancing, exits and high-performing pools"
                    />
                    <FeatureCard
                        sm
                        index={typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 2}
                        icon="https://dashboard.codeparrot.ai/api/image/Z-1h4-GYgKEKiAWD/img-3.png"
                        title="Optimized Positioning"
                        description="Tailors placements based on your risk profile"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    <FeatureCard
                        sm
                        index={1}
                        icon="https://dashboard.codeparrot.ai/api/image/Z-1h4-GYgKEKiAWD/img-4.png"
                        title="Dynamic Fee Adjustments"
                        description="Modifies trading fees in real time based on volatility"
                    />
                    <FeatureCard
                        sm
                        index={typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 1}
                        icon="https://dashboard.codeparrot.ai/api/image/Z-1h4-GYgKEKiAWD/img-5.png"
                        title="Pool Design"
                        description="Crafts liquidity curves and fee structures for token launches"
                    />
                </div>
            </div>

            <div className="flex justify-center w-full mt-8 mb-8">
                <PrimaryButton>Examine Documentation</PrimaryButton>
            </div>
        </section>
    );
}
