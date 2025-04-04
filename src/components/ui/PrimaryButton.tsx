import Link from "next/link";
import ArrowIcon from "./icons/ArrowIcon";

export function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <button
            id="primary-button"
            onClick={onClick}
            className="flex group relative items-center w-fit gap-4  bg-black hover:bg-transparent hover:transition-colors hover:delay-100 rounded-full px-5 p-2.5 "
        >
            <span className="text-button mr-10 text-white z-10 max-lg:!text-[19px]">{children}</span>
            <div className="radial-gradient transition-all duration-200 ease-in-out right-2.5 group-hover:right-0  absolute rounded-full group-hover:w-full group-hover:h-full w-[38px] h-[38px]"></div>
            <ArrowIcon className="absolute w-[38px] h-[38px] rounded-full right-2.5" />
        </button>
    );
}
