import chat from "@/assets/chat.png";
import sendToChat from "@/assets/sendChat.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export function GiveCommands() {
    const chatRef = useRef<HTMLImageElement>(null);
    const sendRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const aiTitle = new SplitType("#give-commands-title");

        gsap.fromTo(
            aiTitle.chars,
            { opacity: 0, filter: "blur(10px)" },
            {
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power3.inOut",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: "#give-commands-section",
                    start: "top 80%",
                    end: "top 30%",
                },
            }
        );

        if (chatRef.current) {
            gsap.fromTo(
                chatRef.current,
                {
                    rotateX: 80,
                    scale: 0.4,
                    opacity: 0,
                    transformPerspective: 1000,
                },
                {
                    rotateX: 0,
                    scale: 1,
                    opacity: 1,
                    transformPerspective: 1000,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: chatRef.current,
                        start: "top 90%",
                        end: "top 30%",
                        scrub: true,
                    },
                }
            );
        }

        if (sendRef.current) {
            gsap.fromTo(
                sendRef.current,
                { scale: 0.7, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sendRef.current,
                        start: "top 95%",
                        end: "top 60%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <section
            id="give-commands-section"
            className="flex flex-col items-center justify-center w-full min-w-[300px] gap-4 max-lg:p-4 py-12 lg:bg-white rounded-3xl"
        >
            <h2 className="text-body max-lg:text-center">No complex UI—just type what you need, and AI handles the rest</h2>
            <h1 id="give-commands-title" className="text-h1 mb-6 max-lg:text-center">
                <span className="text-secondary">Give Commands.</span>
                <br className="lg:hidden" />
                <span> AI Executes.</span>
            </h1>
            <div className="relative max-w-[637px] max-h-[521px]">
                <img ref={chatRef} className="mx-auto w-[90%]" src={chat.src} alt="AI Chat" />
                <img ref={sendRef} className="absolute -bottom-4 mx-auto" width={637} height={80} src={sendToChat.src} alt="Send to Chat" />
            </div>
        </section>
    );
}
