import { PrimaryButton } from "../ui/PrimaryButton";
import PoweredByAlgebra from "@/assets/PoweredByAlgebra.png";
import XLogo from "@/assets/socials/XLogo.svg";
import TGLogo from "@/assets/socials/TGLogo.svg";
import DiscordLogo from "@/assets/socials/DiscordLogo.svg";
import ArrowUpRight from "@/assets/socials/ArrowUpRight.svg";
import { LinkButtonSquared } from "../ui/LinkButton";
import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Link from "next/link";

const socialLinks = [
    { name: "Twitter", icon: XLogo.src, link: "https://x.com/main_ai_dex" },
    { name: "Discord", icon: DiscordLogo.src, link: "http://discord.gg/main_ai_dex" },
    { name: "Telegram", icon: TGLogo.src, link: "https://t.me/MAIN_AI_DEX" },
    {
        name: "Blog",
        icon: ArrowUpRight.src,
        link: "#",
    },
];

const Footer = () => {
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
                    trigger: "footer",
                    start: "top 60%",
                    end: "top 5%",
                    scrub: true,
                },
            }
        );
    }, []);
    return (
        <footer id="footer" className="flex flex-col gap-20 items-center max-w-[1280px] w-full py-24 justify-center relative ">
            <div
                id="part-of-ai-banner"
                className="w-full p-4 min-h-[600px] rounded-3xl radial-gradient flex flex-col items-center justify-center"
            >
                <div className="flex flex-col items-center gap-5 w-full ">
                    <h1 className="text-h1 text-white max-lg:text-center">Be Part of the AI Revolution</h1>
                    <p className="text-body text-white max-lg:text-center">Get early access to next-gen DEX experience</p>
                </div>

                <Link target="_blank" className="mt-8" href={"https://maindex.deform.cc/waitlist"}>
                    <PrimaryButton>Experience AI-Run DeFi</PrimaryButton>
                </Link>
            </div>

            <div className="max-w-[940px] w-full flex flex-col gap-[60px]">
                <div className="flex flex-col items-center gap-8">
                    <Link href={"https://algebra.finance/"}>
                        <img
                            className="hover:scale-105 transition-all duration-200"
                            src={PoweredByAlgebra.src}
                            alt="Algebra Logo"
                            width={110}
                        />
                    </Link>
                    <p className="text-body text-center text-black max-w-[600px]">
                        Algebra shaped DEX infrastructure. AI turns it into an intelligent and autonomous force
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <p className="text-body-s text-black">Join us</p>
                    <div className="grid max-w-[940px] grid-cols-2 items-center lg:grid-cols-4 gap-5 justify-center">
                        {socialLinks.map((social) => (
                            <LinkButtonSquared key={social.name} href={social.link} name={social.name} icon={social.icon} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full text-center">
                <p className="text-body-s text-black">© 2025 Algebra All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
