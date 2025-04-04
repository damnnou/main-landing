/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#F6F7F8",
                primary: "#000000",
                secondary: "#D4D9E4",
                "dark-background": "#1a1a1a", // Темный фон
                "dark-primary": "#10b68b",
            },

            fontFamily: {
                sans: ["ClashGrotesk-Regular", "Poppins", "Roboto", "sans-serif"], // Основной шрифт
            },

            keyframes: {
                gravity: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "20%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-30px)",
                        rotate: "10deg",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
                "text-fly-in": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-50px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0px)",
                    },
                },
                "pea-fly-in": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-100px)",
                    },
                    "25%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
                "left-in": {
                    "0%": {
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        transform: "translateX(0)",
                    },
                },
                "right-in": {
                    "0%": {
                        transform: "translateX(100%)",
                    },
                    "100%": {
                        transform: "translateX(0)",
                    },
                },
                "rotate-in": {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(180deg)",
                    },
                },
                "rotate-out": {
                    "0%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
                "fade-down": {
                    "0%": {
                        opacity: 1,
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translateY(150px)",
                    },
                },
            },
        },
        animation: {
            gravity: "gravity 5s infinite linear",
            "text-fly-in": "text-fly-in 0.6s ease-in-out",
            "pea-fly-in": "pea-fly-in 2s ease-in-out",
            "gravity-pea-fly-in": "gravity 5s infinite linear, pea-fly-in 1s ease-in-out",
            "left-in": "left-in 1s ease-in-out",
            "right-in": "right-in 1s ease-in-out",
            "rotate-in": "rotate-in 0.2s ease-in-out",
            "rotate-out": "rotate-out 0.2s ease-in-out",
            "fade-down": "fade-down 0.2s ease-in-out",
        },
    },
    plugins: [require("tailwindcss-animated")],
};
