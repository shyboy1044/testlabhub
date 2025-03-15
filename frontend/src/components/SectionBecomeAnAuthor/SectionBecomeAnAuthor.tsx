import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import rightImgDemo from "images/custom/product.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Logo from "shared/Logo/Logo";
import { NavLink, useLocation } from "react-router-dom";

export interface SectionBecomeAnAuthorProps {
    className?: string;
    rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
    className = "",
    rightImg = rightImgDemo,
}) => {
    return (
        <div
            className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row  ${className}`}
            data-nc-id="SectionBecomeAnAuthor"
        >
            <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
                <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
                    Discover certification with product iQ via text based search
                </h2>
                <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
                    We enable consumers and businesses to verify market
                    acceptance for millions of products sold in e-commerce and
                    social commerce platforms. Keeping unsafe products away from
                    end users is one of our core missions.
                </span>
                <div className="mt-11 flex flex-row">
                    <span className="flex-start block mt-6 text-neutral-500 dark:text-neutral-700">
                        For more information
                        <NavLink
                            end
                            rel="noopener noreferrer"
                            className="text-red-600 dark:text-neutral-300 hover:text-black dark:hover:text-white pl-5 underline"
                            to="/submit-rfq"
                        >
                            click here
                        </NavLink>
                    </span>
                </div>
            </div>
            <div className="flex-grow">
                <NcImage src={rightImg} />
            </div>
        </div>
    );
};

export default SectionBecomeAnAuthor;
