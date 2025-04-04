import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import XLogo from "@/assets/socials/XLogo.svg";
import TGLogo from "@/assets/socials/TGLogo.svg";
import DiscordLogo from "@/assets/socials/DiscordLogo.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@/components/ui/Button";
import { isAddress } from "ethers";
import { LinkButton } from "@/components/ui/LinkButton";
import { motion } from "framer-motion";
const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

// const verifyCaptcha = async (captchaValue: string): Promise<boolean> => {
//     const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             secret: RECAPTCHA_SITE_KEY, // Your reCAPTCHA secret key
//             response: captchaValue,
//         }),
//     });
//     const data = await response.json();
//     return data.success; // true if the captcha was verified successfully
// };

const MailchimpForm = ({ close }: { close: () => void }) => {
    const [email, setEmail] = useState("");
    const [wallet, setWallet] = useState("");
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [errors, setErrors] = useState({ email: "", wallet: "" });
    const [captchaValue, setCaptchaValue] = useState<string | null>("");

    const validate = () => {
        let valid = true;
        const newErrors = { email: "", wallet: "" };

        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!wallet) {
            newErrors.wallet = "Wallet address is required";
            valid = false;
        } else {
            if (!isAddress(wallet)) {
                newErrors.wallet = "Wallet address is invalid";
                valid = false;
            }
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate() || !captchaValue) return;

        setLoading(true);
        setResponseMessage("");

        // try {
        //     // const isCaptchaValid = await verifyCaptcha(captchaValue);
        //     // if (!isCaptchaValid) {
        //     //     throw new Error("Captcha verification failed");
        //     // }

        //     const checkResponse = await fetch(`https://api.tonco.io/check_wallet?address=${Address.parse(wallet).toString()}`, {
        //         method: "GET",
        //         // headers: {
        //         //     "Content-Type": "application/json",
        //         // },
        //     });
        //     if (!checkResponse.ok) {
        //         throw new Error("Wallet check failed");
        //     }

        //     const isWalletExist = (await checkResponse.json()).exists;

        //     if (isWalletExist) {
        //         setResponseMessage("Wallet already participated");
        //         throw new Error("Wallet already participated");
        //     }

        //     const addUserResponse = await fetch("https://api.tonco.io/add_user", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             email: email,
        //             address: Address.parse(wallet).toString(),
        //         }),
        //     });

        //     if (!addUserResponse.ok) {
        //         const jsonErr = await addUserResponse.json();
        //         const msgErr = jsonErr.detail[0].msg;
        //         if (msgErr === undefined) {
        //             throw new Error(jsonErr.detail);
        //         }
        //         throw new Error(`Failed to add user: "${msgErr}"`);
        //     }

        //     const addUserData = await addUserResponse.json();
        //     setResponseMessage("Success! You have been subscribed.");
        //     setEmail("");
        //     setWallet("");
        //     setCaptchaValue(null);
        // } catch (error) {
        //     setResponseMessage(String(error));
        // } finally {
        //     setLoading(false);
        // }
    };

    const isSuccess = responseMessage.includes("Success");

    return (
        <div
            style={{ height: isSuccess ? "582px" : "auto" }}
            className="w-[650px] min-h-[582px] relative animate-fade-up animate-duration-300 max-md:w-full max-md:h-fit mx-auto max-md:p-6 p-8 gap-4 bg-white dark:bg-dark-background rounded-3xl shadow-lg"
        >
            <X
                onClick={close}
                className="text-gray-600 z-10 absolute right-8 hover:text-black dark:hover:text-white cursor-pointer transition-all duration-200"
            />
            <form
                onSubmit={handleSubmit}
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="w-full h-full space-y-4"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{isSuccess ? "" : "Join the revolution"}</h2>
                </div>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center w-full h-full text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                            className="relative flex items-center justify-center w-[82px] h-[82px]"
                        >
                            {/* Галочка */}
                            <motion.svg
                                width="128"
                                height="128"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-500"
                            >
                                <motion.path
                                    d="M5 12l5 5L20 7"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
                                />
                            </motion.svg>
                        </motion.div>
                        <h3 className="text-2xl font-semibold mt-4">Success! Thank you</h3>
                        <p className="text-gray-500 mt-2">We've received your submission and will get back to you soon.</p>
                        <p className="text-gray-500 mt-1">Stay connected with us on social media!</p>
                        <div className="flex items-center justify-center w-fit mx-auto gap-6 mt-6">
                            <LinkButton href="https://google.com" alt="Twitter" icon={XLogo.src} />
                            <LinkButton href="https://google.com" alt="Discord" icon={DiscordLogo.src} />
                            <LinkButton href="https://google.com" alt="Telegram" icon={TGLogo.src} />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex flex-col gap-4 text-sm">
                            Provide your details below to get notified once our mainnet is live. By joining, you agree to receive an email
                            about the launch and related updates.
                            <p>
                                <span className="text-red-500">*</span> indicates required
                            </p>
                        </div>
                        <div>
                            <label htmlFor="mce-EMAIL" className="block mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="EMAIL"
                                className={`w-full border rounded-xl p-3 dark:bg-neutral-800 dark:border-neutral-600 ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                                id="mce-EMAIL"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-300">Your email address</span>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="">
                            <label htmlFor="mce-WALLET" className="block mb-1">
                                Wallet Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="WALLET"
                                className={`w-full border rounded-xl p-3 dark:bg-neutral-800 dark:border-neutral-600 ${
                                    errors.wallet ? "border-red-500" : "border-gray-300"
                                }`}
                                id="mce-WALLET"
                                value={wallet}
                                onChange={(e) => setWallet(e.target.value)}
                                required
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-300">Your EVM wallet address</span>
                            {errors.wallet && <p className="text-red-500 text-sm">{errors.wallet}</p>}
                        </div>

                        {RECAPTCHA_SITE_KEY ? (
                            <ReCAPTCHA sitekey="6Lc3eG8qAAAAAAaTpuSTiJrTmgm0rxk4BiLflFcW" onChange={(value) => setCaptchaValue(value)} />
                        ) : null}

                        {responseMessage && (
                            <div className={`mt-2 ${responseMessage.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                                {responseMessage}
                            </div>
                        )}
                        <div className="grid grid-cols-2 gap-6 w-full">
                            <Button onClick={close} variant="secondary" type="button" id="mc-embedded-subscribe">
                                Cancel
                            </Button>
                            <Button
                                disabled={!email || !wallet || !captchaValue || loading}
                                className={!email || !wallet || !captchaValue || loading ? "opacity-50 hover:!-translate-y-0" : ""}
                                variant="primary"
                                type="submit"
                                id="mc-embedded-subscribe"
                            >
                                {loading ? (
                                    "Loading..."
                                ) : (
                                    <>
                                        Subscribe <ArrowRight />
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MailchimpForm;
