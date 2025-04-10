import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Observer from "gsap/dist/Observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin, Observer);

export default function Home() {
    return (
        <div className="flex flex-col items-center max-w-screen mx-auto lg:px-6">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
