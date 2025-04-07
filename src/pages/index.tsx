import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

const sections = [
    { id: "hero-section", name: "Why MAIN?" },
    { id: "ai-features-section", name: "Why MAIN?" },
    { id: "automated-liquidity-section", name: "Automated Liquidity" },
    { id: "give-commands-section", name: "How it works" },
    { id: "set-your-goals-section", name: "Roadmap" },
    { id: "roadmap-section", name: "Roadmap" },
    { id: "footer", name: "Footer" },
];

export default function Home() {
    const debounce = (func: any, delay: number) => {
        let timeout: any;
        return (...args: any) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    useLayoutEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.08,
        });

        if (typeof window !== "undefined" && window.innerWidth < 768) return;

        const sections_ = sections.map((section) => document.getElementById(section.id));
        const snapPoints: number[] = [];

        sections_.forEach((section) => {
            const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
            const offset = 40;
            const position = (section?.offsetTop || 0) - headerHeight - offset;
            snapPoints.push(position);
        });

        let currentSection = 0;

        const scrollToSection = (index: number) => {
            if (index >= 0 && index < snapPoints.length) {
                currentSection = index;
                lenis.scrollTo(snapPoints[index], {
                    duration: 0.8,
                    lerp: 0.08,
                    easing: (t) => 1 - Math.pow(1 - t, 3),
                });
            }
        };

        const reachedBottomOfSection = () => {
            const current = sections_[currentSection];
            if (!current) return false;

            const rect = current.getBoundingClientRect();
            const threshold = current.id === "hero-section" ? 800 : -40;
            return rect.bottom - threshold <= window.innerHeight;
        };

        Observer.create({
            type: "wheel",
            wheelSpeed: -1,
            onUp: debounce(() => {
                if (reachedBottomOfSection()) {
                    scrollToSection(currentSection + 1);
                }
            }, 100),
            onDown: debounce(() => {
                scrollToSection(currentSection - 1);
            }, 100),
            tolerance: 8,
            preventDefault: true,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="flex flex-col items-center max-w-screen mx-auto ">
            <video loop autoPlay muted playsInline className="absolute z-0 top-0 left-0 w-full h-full object-cover">
                <source src="/static/ai_animat.mp4" type="video/mp4" />
            </video>

            {/* <ThemeToggle className="max-md:hidden" /> */}
            {/* <LanguageToggle className="max-md:hidden" /> */}
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
