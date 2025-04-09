import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Observer from "gsap/dist/Observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);

export default function Home() {
    // useLayoutEffect(() => {
    //     const blocks = document.querySelectorAll("section");

    //     const blocksObserver = new IntersectionObserver(
    //         (entries) => {
    //             return entries.forEach((event) => {
    //                 const { target, intersectionRatio, isIntersecting } = event;
    //             });
    //         },
    //         { threshold: 0.5 }
    //     );

    //     for (const block of blocks) {
    //         blocksObserver.observe(block);
    //     }
    // }, []);

    return (
        <div className="flex flex-col items-center max-w-screen mx-auto lg:px-6">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
