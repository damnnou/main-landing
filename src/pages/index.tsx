import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Observer from "gsap/dist/Observer";
import { useEffect } from "react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin, Observer);

export default function Home() {
    useEffect(() => {
        const sectionElements = document.querySelectorAll("section");

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        const snapPoints = Array.from(sectionElements).map((section) => {
            const sectionCenter = section.offsetTop + section.offsetHeight / 2;
            const scrollTo = sectionCenter - window.innerHeight / 2;
            return scrollTo / maxScroll;
        });

        if (window.innerHeight > 720) {
            ScrollTrigger.create({
                snap: {
                    snapTo: snapPoints,
                    duration: 0.5,
                    ease: "power1.out",
                },
                start: 0,
                end: "max",
            });
        }

        const lenis = new Lenis({ duration: 0.5 });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="flex flex-col items-center max-w-screen mx-auto lg:px-6">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
