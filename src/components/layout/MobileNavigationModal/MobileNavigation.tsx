import React from "react";
import XLogo from "@/assets/socials/XLogo.svg";
import TGLogo from "@/assets/socials/TGLogo.svg";
import DiscordLogo from "@/assets/socials/DiscordLogo.svg";
import CloseIcon from "@/assets/closeIcon.svg";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { LinkButton, LinkButtonWithArrow } from "@/components/ui/LinkButton";
import Link from "next/link";

interface MobileNavigationProps {
    onClose?: (e: any) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onClose }) => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
            const offset = 20;
            const position = section.getBoundingClientRect().top + window.scrollY - headerHeight - offset;

            window.scrollTo({ top: position, behavior: "smooth" });
        }
    };
    return (
        <div className="flex flex-col bg-white w-full px-2 pt-16 pb-8 rounded-3xl animate-fade-up animate-duration-200">
            <button onClick={onClose} className="absolute top-3 right-4 w-8 h-8 flex items-center justify-center">
                <img className="pointer-events-none" src={CloseIcon.src} alt="close" width={32} height={32} />
            </button>

            <div className="flex flex-col gap-8 mb-12">
                <button
                    onClick={(e) => {
                        onClose?.(e);
                        scrollToSection("ai-features-section");
                    }}
                    className="text-2xl text-black font-normal text-center"
                >
                    Why MAIN?
                </button>
                <button
                    onClick={(e) => {
                        onClose?.(e);
                        scrollToSection("give-commands-section");
                    }}
                    className="text-2xl text-black font-normal text-center"
                >
                    How it works
                </button>
                <button
                    onClick={(e) => {
                        scrollToSection("roadmap-section");
                        onClose?.(e);
                    }}
                    className="text-2xl text-black font-normal text-center"
                >
                    Roadmap
                </button>
            </div>

            <div className="flex flex-col gap-8 items-center">
                <Link target="_blank" href={"https://maindex.deform.cc/waitlist"}>
                    <PrimaryButton>App Coming Soon</PrimaryButton>
                </Link>
                <LinkButtonWithArrow href={""}>Blog</LinkButtonWithArrow>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center w-fit mx-auto gap-8 mt-8">
                <LinkButton href={"https://x.com/main_ai_dex"} alt="Twitter" icon={XLogo.src} />
                <LinkButton href={"http://discord.gg/main_ai_dex"} alt="Discord" icon={DiscordLogo.src} />
                <LinkButton href={"https://t.me/MAIN_AI_DEX"} alt="Telegram" icon={TGLogo.src} />
            </div>
        </div>
    );
};

export default MobileNavigation;
