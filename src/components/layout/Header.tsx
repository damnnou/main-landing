import Link from "next/link";
import React, { useEffect, useState } from "react";
import main from "../../assets/main.svg";
import XLogo from "@/assets/socials/XLogo.svg";
import TGLogo from "@/assets/socials/TGLogo.svg";
import { PrimaryButton } from "../ui/PrimaryButton";
import { LinkButton, LinkButtonWithArrow } from "../ui/LinkButton";
import MenuLogo from "../common/MenuLogo";
import MobileNavigationModal from "./MobileNavigationModal";

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const position = sectionTop - viewportHeight / 2 + sectionHeight / 2 - headerHeight;

        window.scrollTo({ top: position, behavior: "smooth" });
    }
};

const Header: React.FC = () => {
    const sections = [
        { id: "ai-features-section", name: "Why MAIN?" },
        { id: "give-commands-section", name: "How it works" },
        { id: "roadmap-section", name: "Roadmap" },
    ];

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
            const scrollPosition = window.scrollY + headerHeight + 120; // Учитываем отступ

            let newActiveSection = activeSection;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const top = element.offsetTop;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        newActiveSection = section.id;
                        break;
                    }
                }
            }

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <nav className="flex min-h-[56px] fixed top-4 z-50 max-w-[1144px] w-[calc(100%-2rem)] justify-between items-center p-2.5 bg-white rounded-full shadow-xl animate-text-fly-in animate-delay-100 opacity-0 animate-fill-forwards">
            <div className="flex items-center gap-6">
                <button onClick={() => scrollToSection("hero-section")} className="flex items-center">
                    {/* <img className="lg:ml-1 mr-3" src={logo.src} alt="Logo" width={36} height={36} /> */}
                    <img src={main.src} alt="Logo" className="lg:ml-4 ml-2" width={72} />
                </button>
                <div className="w-px h-8 bg-gray-200 max-xl:hidden" />
                <div className="flex gap-8 max-xl:hidden">
                    <button
                        onClick={() => scrollToSection("ai-features-section")}
                        className={`text-nav-footer ${activeSection === "ai-features-section" ? "font-bold !text-black" : ""}`}
                    >
                        Why MAIN?
                    </button>
                    <button
                        onClick={() => scrollToSection("give-commands-section")}
                        className={`text-nav-footer ${activeSection === "give-commands-section" ? "font-bold !text-black" : ""}`}
                    >
                        How it works
                    </button>
                    <button
                        onClick={() => scrollToSection("roadmap-section")}
                        className={`text-nav-footer ${activeSection === "roadmap-section" ? "font-bold !text-black" : ""}`}
                    >
                        Roadmap
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 max-lg:hidden">
                <div className="flex gap-4 items-center">
                    <LinkButton href={"https://x.com/main_ai_dex"} alt="Twitter" icon={XLogo.src} />
                    {/* <LinkButton href={"http://discord.gg/main_ai_dex"} alt="Discord" icon={DiscordLogo.src} /> */}
                    <LinkButton href={"https://t.me/MAIN_AI_DEX"} alt="Telegram" icon={TGLogo.src} />
                    <LinkButtonWithArrow href={"https://blog.main.exchange"}>Blog</LinkButtonWithArrow>
                </div>
                <Link target="_blank" href={"https://maindex.deform.cc/waitlist"}>
                    <PrimaryButton>App Coming Soon</PrimaryButton>
                </Link>
            </div>
            <MobileNavigationModal>
                <button className="rounded-full w-fit h-fit lg:hidden bg-white flex items-center justify-center">
                    <MenuLogo className="w-[28px] h-[28px] mr-1" />
                </button>
            </MobileNavigationModal>
        </nav>
    );
};

export default Header;
