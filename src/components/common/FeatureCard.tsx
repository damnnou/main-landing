import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FeatureCardProps {
    title: string | JSX.Element;
    description: string;
    icon: string;
    sm?: boolean;
    index: number;
}

const FeatureCard = ({ title, description, icon, sm = false, index }: FeatureCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current && contentRef.current) {
            const rowDelay = index * 0.13;

            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: (index + 0.8) * 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: rowDelay,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 90%",
                        end: "top 60%",
                    },
                }
            );

            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: rowDelay + 0.1,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 90%",
                        end: "top 60%",
                    },
                }
            );
        }
    }, [index]);

    return (
        <div ref={cardRef} className="feature-card p-5 md:p-[30px] gap-8 pb-10 bg-white rounded-[24px] shadow-lg">
            <div ref={contentRef} className="feature-card-content flex flex-col items-center justify-center">
                <img
                    style={{ width: sm ? "80px" : "140px", height: sm ? "80px" : "140px" }}
                    src={icon}
                    alt={title.toString()}
                    className="object-contain object-center"
                />
                <div className={"flex flex-col gap-4 items-center justify-center " + (sm ? "mt-4" : "mt-8")}>
                    <h2 className="text-h2 text-center">{title}</h2>
                    <p className="text-body text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
