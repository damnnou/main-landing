import ArrowIcon from "./icons/ArrowIcon";

export function PrimaryButton({ children, onClick, variant = 1 }: { children: React.ReactNode; onClick?: () => void; variant?: 1 | 2 }) {
    return (
        <button
            id="primary-button"
            onClick={onClick}
            className="flex group relative items-center w-fit gap-4  bg-black hover:bg-transparent hover:transition-colors hover:delay-100 rounded-full px-5 max-lg:px-4 p-2.5"
        >
            <span
                className={
                    "text-button text-white mr-10 z-10 max-lg:!text-[19px] " + (variant === 1 ? "" : "group-hover:text-black duration-200")
                }
            >
                {children}
            </span>
            <div
                className={
                    "transition-all duration-200 ease-in-out right-2.5 max-lg:right-1.5 group-hover:right-0  absolute rounded-full group-hover:w-full group-hover:h-full w-[38px] h-[38px] " +
                    (variant === 1 ? "radial-gradient" : "bg-white")
                }
            />
            <ArrowIcon
                className={
                    "absolute w-[38px] h-[38px] rounded-full right-2.5 max-lg:right-1.5 " +
                    (variant === 1 ? "" : "group-hover:invert duration-200")
                }
            />
        </button>
    );
}
