import { LinkButton } from "@/components/ui/LinkButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import XLogo from "@/assets/socials/XLogo.svg";
import TGLogo from "@/assets/socials/TGLogo.svg";
import DiscordLogo from "@/assets/socials/DiscordLogo.svg";
import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import WaitlistModal from "@/components/layout/WaitListModal";
import Link from "next/link";

export default function HeroSection() {
    useEffect(() => {
        const aiTitle = new SplitType("#ai-title");
        gsap.from(aiTitle.lines, {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateY(50px)",
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#hero-section",
            },
        });

        const aiDescription = new SplitType("#ai-description");

        gsap.from(aiDescription.lines, {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateY(50px)",
            delay: 0.1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#hero-section",
            },
        });

        gsap.from("#primary-button", {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateY(50px)",
            delay: 0.2,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#hero-section",
            },
        });
    }, []);

    return (
        <section
            id="hero-section"
            className="relative flex flex-col items-start w-full h-screen md:min-h-[900px]  max-md:h-screen text-white overflow-hidden"
        >
            <div className="relative snap-always snap-center z-10 flex flex-col max-lg:items-center gap-5 max-w-[600px] max-lg:mx-auto mt-[88px] max-lg:my-auto">
                <h1 id="ai-title" className="text-h1 max-lg:text-center">
                    Truly AI-
                    <br />
                    Powered DEX
                </h1>
                <p id="ai-description" className="text-body max-w-[380px] max-lg:text-center">
                    An AI runs the DEX, so you don’t have to. Say hello to autonomous DeFi
                </p>

                <Link target="_blank" href={"https://maindex.deform.cc/waitlist"}>
                    <PrimaryButton>Join the Revolution</PrimaryButton>
                </Link>

                <div className="flex items-center justify-center w-fit gap-8 mt-8 lg:hidden">
                    <LinkButton href={"https://google.com"} alt="Twitter" icon={XLogo.src} />
                    <LinkButton href={"https://google.com"} alt="Discord" icon={DiscordLogo.src} />
                    <LinkButton href={"https://google.com"} alt="Telegram" icon={TGLogo.src} />
                </div>
            </div>
        </section>
    );
}
