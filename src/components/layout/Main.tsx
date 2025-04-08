import HeroSection from "../sections/HeroSection";
import AIFeatures from "../sections/AIFeatures";
import { GiveCommands } from "../sections/GiveCommands";
import { AutomatedLiquidity } from "../sections/AutomatedLiquidity";
import { SetYourGoals } from "../sections/SetYourGoals";
import { Roadmap } from "../sections/Roadmap";

const Main = () => {
    return (
        <main className="flex flex-col gap-8 max-md:px-0 items-center w-full">
            <div className="section w-full !pt-0 !min-h-screen">
                <HeroSection />
            </div>
            <div className="max-w-[1082px] w-full flex flex-col gap-24 items-center mt-24 max-lg:px-4 max-lg:gap-12 mx-auto">
                <div className="section">
                    <AIFeatures />
                </div>
                <div className="section">
                    <AutomatedLiquidity />
                </div>
                <div className="section">
                    <GiveCommands />
                </div>
                <div className="section">
                    <SetYourGoals />
                </div>
                <div className="section">
                    <Roadmap />
                </div>
            </div>
        </main>
    );
};

export default Main;
