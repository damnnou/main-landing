import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on("scroll", ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);
    }, []);
    return (
        <div className="flex flex-col items-center max-w-screen mx-auto">
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
