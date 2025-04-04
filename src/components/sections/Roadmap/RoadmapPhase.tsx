import React from "react";
import InfoCard, { InfoCardProps } from "./RoadmapInfoCard";

export interface RoadmapPhaseProps {
    title: string;
    description: string;
    phase: number;
    infoCards: InfoCardProps[];
    shield: string;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, shield, title, description, infoCards }: RoadmapPhaseProps) => {
    return (
        <div className="flex flex-col p-4 lg:p-10 gap-10 bg-white rounded-3xl w-full">
            <div className="flex flex-col gap-8">
                <div className="flex max-lg:flex-col-reverse max-lg:items-start items-center gap-4">
                    <h1 className="text-h1 text-secondary">{phase} Phase</h1>
                    <div className="px-4 py-2 text-white roadmap-shield rounded-xl">{shield}</div>
                </div>

                <div className="flex flex-col justify-center gap-2">
                    <h2 className="text-h2">{title}</h2>
                    <p className="text-body">{description}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                {infoCards.map((props, index) => (
                    <InfoCard {...props} key={index} />
                ))}
            </div>
        </div>
    );
};

export default RoadmapPhase;
