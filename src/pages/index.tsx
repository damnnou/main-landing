import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// const sections = [
//     { id: "hero-section", name: "Why MAIN?" },
//     { id: "ai-features-section", name: "Why MAIN?" },
//     { id: "automated-liquidity-section", name: "Automated Liquidity" },
//     { id: "give-commands-section", name: "How it works" },
//     { id: "set-your-goals-section", name: "Roadmap" },
//     { id: "roadmap-section", name: "Roadmap" },
//     { id: "footer", name: "Footer" },
// ];

export default function Home() {
    useLayoutEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 768) return;
        const sections = document.querySelectorAll("section");
        let index = 0;

        function scrollToSection(i: number) {
            sections[i].scrollIntoView({ behavior: "smooth" });
        }

        function handleScroll(e: any) {
            const currentSection = sections[index];
            const rect = currentSection.getBoundingClientRect();

            if (e.deltaY > 0 && rect.bottom <= window.innerHeight && index < sections.length - 1) {
                index++;
                scrollToSection(index);
            } else if (e.deltaY < 0 && rect.top >= 0 && index > 0) {
                index--;
                scrollToSection(index);
            }
        }

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);
    return (
        <div className="flex flex-col items-center max-w-screen mx-auto">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
