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
    // { name: "Discord", icon: DiscordLogo.src, link: "http://discord.gg/main_ai_dex" },
    { name: "Telegram", icon: TGLogo.src, link: "https://t.me/MAIN_AI_DEX" },
    {
        name: "Blog",
        icon: ArrowUpRight.src,
        link: "https://blog.main.exchange",
    },
];

const Footer = () => {
    return (
        <section id="footer-section" className="section h-full mt-20">
            <footer id="footer" className="flex flex-col gap-20 items-center max-w-[1082px] w-full max-lg:px-4 justify-center relative">
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
                            Algebra shaped DEX infrastructure as the battle-tested engine behind 50+ protocols and $250M+ in TVL since 2021.{" "}
                            <br /> AI transforms it into an intelligent and autonomous force
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <p className="text-body-s text-black">Join us</p>
                        <div className="grid max-w-[940px] grid-cols-3 items-center lg:grid-cols-3 gap-4 justify-center">
                            {socialLinks.map((social) => (
                                <LinkButtonSquared key={social.name} href={social.link} name={social.name} icon={social.icon} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full text-center mb-20">
                    <p className="text-body-s text-black">© 2025 Algebra All Rights Reserved</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
