import FeatureCard from "@/components/common/FeatureCard";
import img11 from "@/assets/images/image 11011.png";
import img12 from "@/assets/images/image 11012.png";
import img13 from "@/assets/images/image 11013.png";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";

export function SetYourGoals() {
    useEffect(() => {
        const aiTitle = new SplitType("#set-your-goals-title");
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
                    trigger: "#set-your-goals-section",
                    start: "top 80%",
                    end: "top 30%",
                },
            }
        );
    }, []);
    return (
        <section
            id="set-your-goals-section"
            className="flex flex-col items-center lg:items-start justify-center w-full min-w-[300px] gap-8"
        >
            <h1 id="set-your-goals-title" className="text-h1 max-lg:text-center">
                <span>Set Your Goals,</span>
                <br />
                <span className="text-secondary"> Let AI Do the Work</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <FeatureCard
                    index={0}
                    icon={img11.src}
                    title="Earn"
                    description="AI optimizes liquidity for max returns with zero effort from you"
                />
                <FeatureCard
                    index={typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 1}
                    icon={img12.src}
                    title="Trade"
                    description="AI runs advanced strategies like DCA and limit orders for better results"
                />
                <FeatureCard
                    index={typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 2}
                    icon={img13.src}
                    title="Launch"
                    description="AI designs the ideal price curve for the pool and deploys liquidity instantly"
                />
            </div>
        </section>
    );
}
