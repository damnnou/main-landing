import React, { ReactElement, useState, ReactNode } from "react";
import ReactDOM from "react-dom";
import Button from "@/components/ui/Button";

interface ModalBodyProps {
    title?: string;
    onClose?: () => void;
    children: ReactNode;
    footerContent?: ReactNode;
}

export const ModalBody = ({ title, children, footerContent, onClose }: ModalBodyProps) => {
    return (
        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            {title && (
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    {onClose && (
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="p-4">{children}</div>

            {/* Footer */}
            {footerContent && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end space-x-2">{footerContent}</div>
            )}
        </div>
    );
};

interface ModalWindowProps {
    children?: ReactElement<HTMLButtonElement>;
    modalContent?: ReactNode;
    title?: string;
    footerContent?: ReactNode;
    onClose?: () => void;
}

const ModalWindow = ({ children, modalContent, title, footerContent, onClose }: ModalWindowProps) => {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleClose = (e: any): void => {
        if (e.target === e.currentTarget) {
            setAnimating(true);
            setTimeout(() => {
                setVisible(false);
                setAnimating(false);
                onClose?.();
            }, 300);
        }
    };

    const handleOpen = () => {
        setVisible(true);
        setAnimating(false);
    };

    const clonedButton = children ? (
        React.cloneElement(children, { onClick: handleOpen } as any)
    ) : (
        <Button
            variant="action"
            onClick={handleOpen}
            className="mx-auto border !bg-white !border-primary !text-primary dark:!bg-[#1a1a1a] dark:!border-dark-primary dark:!text-dark-primary"
        >
            Open modal
        </Button>
    );

    return (
        <>
            {clonedButton}

            {visible &&
                ReactDOM.createPortal(
                    <div
                        className={`fixed inset-0 px-4 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
                            animating ? "opacity-0" : "opacity-100"
                        }`}
                        onClick={handleClose}
                    >
                        <div
                            className={`transform transition-all duration-300 ${
                                animating ? "scale-95 opacity-0" : "scale-100 opacity-100"
                            }`}
                        >
                            <ModalBody title={title} onClose={handleClose as any} footerContent={footerContent}>
                                {modalContent}
                            </ModalBody>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default ModalWindow;
