import React, { createContext, useContext, useState, useEffect } from "react";

const ImagesLoadedContext = createContext(false);

const useImagesLoaded = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const images = Array.from(document.images);
        const totalImages = images.length;
        let loadedImagesCount = 0;

        const onImageLoad = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === totalImages) {
                setImagesLoaded(true);
            }
        };

        if (totalImages === 0) {
            setImagesLoaded(true);
        } else {
            images.forEach((img) => {
                if (img.complete) {
                    onImageLoad();
                } else {
                    img.addEventListener("load", onImageLoad);
                    img.addEventListener("error", onImageLoad); // Учитываем ошибки
                }
            });
        }
    }, []);

    return imagesLoaded;
};

export const ImagesLoadedProvider = ({ children }: { children: React.ReactNode }) => {
    const imagesLoaded = useImagesLoaded();

    return <ImagesLoadedContext.Provider value={imagesLoaded}>{children}</ImagesLoadedContext.Provider>;
};

export const useImagesLoadedContext = () => {
    return useContext(ImagesLoadedContext);
};
