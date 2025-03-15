import React, { FC } from "react";
import GallerySlider from "./GallerySlider";
import { StayDataType } from "data/types";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
interface Order {
    id: number;
    photourl: string;
    price: number;
    quantity: number;
    name: string;
}

export interface StayCardProps {
    className?: string;
    data?: any;
    size?: "default" | "small";
    addItem: (newOrder: Order) => void;
}

const StayCard: FC<StayCardProps> = ({
    size = "default",
    className = "",
    data = { name: "", photourl: "", price: 0, id: 0 },
    addItem,
}) => {
    const { name, photourl, price, id } = data;

    const renderSliderGallery = () => {
        return (
            <div className="relative w-full">
                <GallerySlider
                    uniqueID={`StayCard_${id}`}
                    ratioClass="aspect-w-4 aspect-h-3 "
                    galleryImg={photourl ?? ""}
                />
            </div>
        );
    };
    const handleAddItem = (
        newId: number,
        photourl: string,
        price: number,
        name: string
    ) => {
        const newOrder: Order = {
            id: newId,
            photourl: photourl,
            price: price,
            quantity: 1,
            name: name,
        };
        addItem(newOrder);
    };
    const renderContent = () => {
        return (
            <div
                className={
                    size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"
                }
            >
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <h2
                            className={` font-medium capitalize ${
                                size === "default" ? "text-lg" : "text-base"
                            }`}
                        >
                            <span className="line-clamp-1">{name}</span>
                        </h2>
                    </div>
                </div>
                <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
                <div className="flex justify-between items-center">
                    <span className="text-base font-semibold">${price}</span>
                    <ButtonPrimary
                        onClick={() => handleAddItem(id, photourl, price, name)}
                    >
                        Add to Cart
                    </ButtonPrimary>
                </div>
            </div>
        );
    };

    return (
        <div
            className={`nc-StayCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden will-change-transform hover:shadow-xl transition-shadow ${className}`}
            data-nc-id="StayCard"
        >
            {renderSliderGallery()}
            <Link to="#">{renderContent()}</Link>
        </div>
    );
};

export default StayCard;
