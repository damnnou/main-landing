import { PrimaryButton } from "@/components/ui/PrimaryButton";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";

export function FooterBanner() {
    useEffect(() => {
        gsap.fromTo(
            "#part-of-ai-banner",
            {
                rotateX: 80,
                scale: 0.4,
                opacity: 0,
                transformPerspective: 1000,
            },
            {
                rotateX: 0,
                scale: 1,
                opacity: 1,
                transformPerspective: 1000,

                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#part-of-ai-banner",
                    start: "top bottom",
                    scrub: false,
                },
            }
        );
    }, []);

    return (
        <section
            id="part-of-ai-banner"
            className="w-full p-4 min-h-[600px] rounded-3xl radial-gradient flex flex-col items-center justify-center"
        >
            <div className="flex flex-col items-center gap-5 w-full ">
                <h1 className="text-h1 text-white max-lg:text-center">Be Part of the AI Revolution</h1>
                <p className="text-body text-white max-lg:text-center">Get early access to next-gen DEX experience</p>
            </div>

            <Link target="_blank" className="mt-8" href={"https://maindex.deform.cc/waitlist"}>
                <PrimaryButton variant={2}>Experience AI-Run DeFi</PrimaryButton>
            </Link>
        </section>
    );
}
