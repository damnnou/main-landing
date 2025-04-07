import HeroSection from "../sections/HeroSection";
import AIFeatures from "../sections/AIFeatures";
import { GiveCommands } from "../sections/GiveCommands";
import { AutomatedLiquidity } from "../sections/AutomatedLiquidity";
import { SetYourGoals } from "../sections/SetYourGoals";
import { Roadmap } from "../sections/Roadmap";

const Main = () => {
    return (
        <main className="flex flex-col gap-8 max-md:px-0 items-center w-full">
            <div className="max-w-[1154px] w-full flex flex-col gap-24 items-center mx-auto ">
                <HeroSection />
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
