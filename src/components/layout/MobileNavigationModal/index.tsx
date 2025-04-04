import React, { ReactElement, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@/components/ui/Button";
import MobileNavigation from "./MobileNavigation";

const MobileNavigationModal = ({ children }: { children?: ReactElement<HTMLButtonElement> }) => {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleClose = (e: any): void => {
        if (e.target === e.currentTarget) {
            setAnimating(true);
            setTimeout(() => {
                setVisible(false);
                setAnimating(false);
            }, 200);
        }
    };

    const handleOpen = () => {
        setVisible(true);
        setAnimating(false); // Сброс анимации при открытии
    };

    const clonedButton = children ? (
        React.cloneElement(children, { onClick: handleOpen } as any)
    ) : (
        <Button
            variant="action"
            onClick={handleOpen}
            className=" mx-auto border !bg-white !border-primary !text-primary dark:!bg-[#1a1a1a] dark:!border-dark-primary dark:!text-dark-primary"
        >
            Open
        </Button>
    );

    return (
        <>
            {clonedButton}

            {visible &&
                ReactDOM.createPortal(
                    <div
                        className={`fixed inset-0 p-4 flex justify-center z-50 filter backdrop-blur-sm transition-opacity duration-200 ${
                            animating ? "opacity-0" : "opacity-100"
                        }`}
                        onClick={handleClose}
                    >
                        <div
                            className={`transform transition-all duration-200 w-full ${
                                animating ? "scale-95 opacity-0" : "scale-100 opacity-100"
                            }`}
                        >
                            <MobileNavigation onClose={handleClose as any} />
                        </div>
                    </div>,
                    document.body // Рендерим в body
                )}
        </>
    );
};

export default MobileNavigationModal;
