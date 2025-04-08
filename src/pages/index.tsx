import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useLayoutEffect } from "react";
import Observer from "gsap/dist/Observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);

export default function Home() {
    useLayoutEffect(() => {
        const sections = document.querySelectorAll("section");
        let index = 0;
        let isScrolling = false;
        const offset = 100;

        function scrollToSection(i: number) {
            isScrolling = true;

            gsap.to(window, {
                duration: 0.6,
                scrollTo: {
                    y: sections[i],
                    autoKill: false,
                    offsetY: offset,
                },
                ease: "power1.inOut",
                onComplete: () => {
                    setTimeout(() => {
                        isScrolling = false;
                    }, 200);
                },
            });
        }

        const observer = Observer.create({
            type: "wheel",
            preventDefault: false,
            onDown: () => {
                if (isScrolling) return;

                const sectionBottom = sections[index].getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (index === 0) {
                    index++;
                    scrollToSection(index);
                    return;
                }

                if (sectionBottom - windowHeight < -180 && index < sections.length - 1) {
                    index++;
                    scrollToSection(index);
                }
            },
            onUp: () => {
                if (isScrolling) return;

                const sectionTop = sections[index].getBoundingClientRect().top;
                if (sectionTop > 180 && index > 0) {
                    index--;
                    scrollToSection(index);
                }
            },
        });

        return () => {
            observer.kill();
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
