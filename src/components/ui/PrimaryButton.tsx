import ArrowIcon from "./icons/ArrowIcon";

export function PrimaryButton({ children, onClick, variant = 1 }: { children: React.ReactNode; onClick?: () => void; variant?: 1 | 2 }) {
    return (
        <button
            id="primary-button"
            onClick={onClick}
            className="flex group relative items-center w-fit gap-4  bg-black hover:bg-transparent hover:transition-colors hover:delay-100 rounded-full px-3 p-2"
        >
            <span
                className={
                    "text-button text-white mr-9 z-10 max-lg:!text-[19px] " + (variant === 1 ? "" : "group-hover:text-black duration-200")
                }
            >
                {children}
            </span>
            <div
                className={
                    "transition-all duration-200 ease-in-out right-1 max-lg:right-1 group-hover:right-0  absolute rounded-full group-hover:w-full group-hover:h-full w-[32px] h-[32px] " +
                    (variant === 1 ? "radial-gradient" : "bg-white")
                }
            />
            <ArrowIcon
                className={
                    "absolute w-[35px] h-[35px] rounded-full right-1 max-lg:right-1 " +
                    (variant === 1 ? "" : "group-hover:invert duration-200")
                }
            />
        </button>
    );
}
