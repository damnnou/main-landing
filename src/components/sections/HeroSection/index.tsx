import { LinkButton } from "@/components/ui/LinkButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import XLogo from "@/assets/socials/XLogo.svg";
import TGLogo from "@/assets/socials/TGLogo.svg";
import DiscordLogo from "@/assets/socials/DiscordLogo.svg";
import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Link from "next/link";
import heroBg from "@/assets/hero-bg.png";

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

        gsap.from("#primary-button-1", {
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
        <section id="hero-section" className="flex flex-col items-start w-full h-screen max-h-screen pt-16 text-white overflow-hidden">
            <img
                src={heroBg.src}
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
                alt="AI-Logo"
                className="absolute z-0 top-0 max-lg:top-12 left-0 w-full h-full object-contain object-top"
            />
            <div className="relative snap-always snap-center z-10 flex flex-col max-lg:items-center items-start gap-5 max-w-[1082px] w-full mx-auto mt-[148px] max-lg:mt-auto max-lg:mb-12">
                <h1 id="ai-title" className="text-h1 max-lg:text-center">
                    Truly AI-
                    <br />
                    Powered DEX
                </h1>
                <p id="ai-description" className="text-body max-w-[420px] max-lg:text-center">
                    An AI runs the DEX, so you don’t have to. <br /> Say hello to autonomous DeFi
                </p>

                <Link id="primary-button-1" target="_blank" href={"https://maindex.deform.cc/waitlist"}>
                    <PrimaryButton>Join the Revolution</PrimaryButton>
                </Link>

                <div className="flex items-center justify-center w-fit gap-8 mt-8 lg:hidden animate-fade-up animate-duration-300 animate-delay-300">
                    <LinkButton href={"https://x.com/main_ai_dex"} alt="Twitter" icon={XLogo.src} />
                    {/* <LinkButton href={"https://google.com"} alt="Discord" icon={DiscordLogo.src} /> */}
                    <LinkButton href={"https://t.me/MAIN_AI_DEX"} alt="Telegram" icon={TGLogo.src} />
                </div>
            </div>
        </section>
    );
}
