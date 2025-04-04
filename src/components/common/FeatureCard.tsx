import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
    title: string;
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
            const rowDelay = index * 0.1;

            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: (index + 1) * 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: rowDelay,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 80%",
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
                    duration: 0.5,
                    ease: "power3.out",
                    delay: rowDelay + 0.1,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 80%",
                        end: "top 60%",
                    },
                }
            );
        }
    }, [index]);

    return (
        <div ref={cardRef} className="feature-card flex flex-col p-5 md:p-[30px] gap-8 pb-10 bg-white rounded-[24px] shadow-lg">
            <div ref={contentRef} className="feature-card-content">
                <img
                    style={{ width: sm ? "110px" : "220px", height: sm ? "90px" : "180px" }}
                    src={icon}
                    alt={title}
                    className="object-contain object-left"
                />
                <div className="flex flex-col gap-5">
                    <h2 className="text-h2">{title}</h2>
                    <p className="text-body">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
