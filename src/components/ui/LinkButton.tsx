import Link from "next/link";
import ArrowIcon from "./icons/ArrowIcon";

export function LinkButtonWithArrow({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link target="_blank" href={href}>
            <button className="flex group relative items-center w-fit gap-4 bg-background hover:bg-transparent hover:transition-colors hover:delay-100 rounded-full px-3 py-2">
                <span className="text-button mr-8 text-black group-hover:text-white transition-colors ease-in-out duration-200 z-10">
                    {children}
                </span>
                <div className="radial-gradient transition-all duration-200 ease-in-out right-[5px] group-hover:right-0  absolute rounded-full group-hover:w-full group-hover:h-full w-[32px] h-[32px]"></div>
                <ArrowIcon className="absolute w-[35px] h-[35px] rounded-full right-1" />
            </button>
        </Link>
    );
}

export function LinkButton({ icon, href, alt }: { icon: string; href: string; alt: string }) {
    return (
        <Link target="_blank" href={href}>
            <button className="flex items-center justify-center group w-[43px] h-[43px] relative gap-4 bg-background hover:bg-transparent hover:transition-colors hover:delay-100 rounded-full ">
                <img
                    className="z-10 filter group-hover:invert transition-all duration-200 ease-in-out"
                    src={icon}
                    alt={alt}
                    width={24}
                    height={24}
                />
                <div className="radial-gradient transition-all duration-200 ease-in-out absolute rounded-full w-0 h-0 group-hover:w-full group-hover:h-full"></div>
            </button>
        </Link>
    );
}

export function LinkButtonSquared({ icon, href, name }: { icon: string; href: string; name: string }) {
    return (
        <Link target="_blank" href={href}>
            <button className="flex max-lg:flex-col items-center rounded-[10px] max-w-[220px] w-full min-h-[70px] justify-center px-4 py-2 group relative gap-2 lg:gap-4 bg-white hover:bg-transparent hover:transition-colors hover:delay-100">
                <img
                    className="z-10 filter group-hover:invert transition-all duration-200 ease-in-out lg:w-[36px] lg:h-[36px] w-[24px] h-[24px]"
                    src={icon}
                    alt={name}
                />
                <span className="text-button z-10 filter group-hover:invert transition-all duration-200 ease-in-out">{name}</span>
                <div className="radial-gradient transition-all duration-200 ease-in-out absolute rounded-[10px] w-0 h-0 group-hover:w-full group-hover:h-full"></div>
            </button>
        </Link>
    );
}
