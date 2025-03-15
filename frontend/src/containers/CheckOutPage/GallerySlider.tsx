import Glide from "@glidejs/glide";
import useNcId from "hooks/useNcId";
import React, { FC, useEffect, useMemo } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link } from "react-router-dom";

export interface GallerySliderProps {
    className?: string;
    galleryImg: string;
    ratioClass?: string;
    uniqueID: string;
    href?: string;
}

const GallerySlider: FC<GallerySliderProps> = ({
    className = "",
    galleryImg,
    ratioClass = "aspect-w-4 aspect-h-3",
    uniqueID = "uniqueID",
    href = "/listing-stay-detail",
}) => {
    const UNIQUE_CLASS = `gallerySlider__${uniqueID}` + useNcId();

    let MY_GLIDEJS = useMemo(() => {
        return new Glide(`.${UNIQUE_CLASS}`, {
            perView: 1,
            gap: 0,
            keyboard: false,
        });
    }, [UNIQUE_CLASS]);

    useEffect(() => {
        setTimeout(() => {
            MY_GLIDEJS.mount();
        }, 10);
    }, [MY_GLIDEJS, UNIQUE_CLASS, galleryImg]);

    const renderSliderGallery = () => {
        return (
            <div className={`${UNIQUE_CLASS} relative group overflow-hidden`}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li key={0} className="glide__slide">
                            <Link to="#" className={`block ${ratioClass}`}>
                                <NcImage src={galleryImg} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div
            className={`nc-GallerySlider ${className}`}
            data-nc-id="GallerySlider"
        >
            {renderSliderGallery()}
        </div>
    );
};

export default GallerySlider;
