import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "action";
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, className, ...props }) => {
    const baseClasses =
        "flex gap-2 bg-primary justify-center items-center self-stretch py-2 my-auto rounded-full min-h-[48px] max-md:min-h-[58px] max-md:text-[16px] max-md:px-5 font-extraboldExt hover:-translate-y-1 transition-all duration-200 ";
    const variantClasses =
        variant === "primary"
            ? " px-5 dark:!bg-dark-primary text-white "
            : variant === "action"
            ? " dark:bg-dark-primary text-white text-xl min-h-[74px] text-[24px] max-md:min-h-[58px] md:h-[74px] max-md:text-[16px] px-8"
            : " px-5 !bg-white dark:!bg-dark-background border border-primary text-primary";

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className} `} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
