import HeroSection from "../sections/HeroSection";
import AIFeatures from "../sections/AIFeatures";
import { GiveCommands } from "../sections/GiveCommands";
import { AutomatedLiquidity } from "../sections/AutomatedLiquidity";
import { SetYourGoals } from "../sections/SetYourGoals";
import { Roadmap } from "../sections/Roadmap";

const Main = () => {
    // const [hasScrolled, setHasScrolled] = useState(false);

    // useEffect(() => {
    //     window.scrollTo({ top: 1280, behavior: 'smooth' });
    // }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0 && !hasScrolled) {
    //             setHasScrolled(true);
    //             // setTimeout(() => {
    //             window.scrollTo({
    //                 top:
    //                     window.innerHeight < 820 ? 0 : window.innerHeight - 180,
    //                 behavior: 'smooth',
    //             });
    //             // }, 100);
    //         }
    //     };

    //     window.addEventListener('wheel', handleScroll);

    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, [hasScrolled]);

    return (
        <main className="flex flex-col gap-8 max-md:px-0 items-center w-full">
            <HeroSection />
            <div className="max-w-[1280px] w-full flex flex-col gap-24 items-center mx-auto">
                <AIFeatures />
                <AutomatedLiquidity />
                <GiveCommands />
                <SetYourGoals />
                <Roadmap />
            </div>
        </main>
    );
};

export default Main;
