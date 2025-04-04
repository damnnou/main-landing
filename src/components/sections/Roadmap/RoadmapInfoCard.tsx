import React from "react";

export interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-row items-center px-4 lg:px-8 bg-background rounded-3xl w-full h-[140px]">
            <div className="min-w-3 min-h-3 mr-4 lg:mr-8 my-auto rounded-full radial-gradient" />
            <div className="flex flex-col gap-2">
                <h3 className="text-h3 max-lg:!text-[18px]">{title}</h3>
                <p className="text-body-s max-lg:!text-[15px]">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
