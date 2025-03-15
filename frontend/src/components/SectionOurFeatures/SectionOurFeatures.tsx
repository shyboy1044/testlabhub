import React, { FC } from "react";
import rightImgPng from "images/custom/scanimg.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
    className?: string;
    rightImg?: string;
    type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
    className = "lg:py-14",
    rightImg = rightImgPng,
    type = "type1",
}) => {
    return (
        <div
            className={`nc-SectionOurFeatures relative flex flex-col ${
                type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
            } ${className}`}
            data-nc-id="SectionOurFeatures"
        >
            <div className="flex-grow">
                <NcImage src={rightImg} />
            </div>
            <div
                className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
                    type === "type1" ? "lg:pl-16" : "lg:pr-16"
                }`}
            >
                <h2 className="font-semibold text-4xl mt-5 lg:text-right">
                    Use the scan camera for instant, AI assisted certification
                    status discovery, recall risk and recycling/sustainability
                    grade{" "}
                </h2>

                <ul className="space-y-10 mt-16">
                    <li className="space-y-4">
                        <span className="block text-xl font-semibold lg:text-right">
                            This app will let you scan barcode to discover the
                            certification status
                        </span>
                        <span className="block mt-5 text-neutral-500 dark:text-neutral-400 lg:text-right">
                            The testlabhub app is the ultimate tool to quickly
                            access essential compliance status information for
                            millions of tracked products with just a scan of
                            their barcodes.
                        </span>
                        <span className="block mt-5 text-neutral-500 dark:text-neutral-400 lg:text-right">
                            With testlabhub, you can effortlessly stay informed
                            about the compliance of various products, ensuring
                            that they meet the necessary regulations and
                            standards. Whether you're a consumer, a retailer, or
                            a regulatory professional, this app is your go-to
                            resource for making informed choices and ensuring
                            product safety.
                        </span>
                    </li>
                    <li className="space-y-4">
                        <span className="block text-xl font-semibold lg:text-right">
                            Key Features:
                        </span>
                        <div className="text-justify">
                            <span className=" text-lg font-semibold">
                                Barcode Scanning:
                            </span>
                            <span className=" mt-5 text-neutral-500 dark:text-neutral-400 text-justify">
                                Simply scan the barcode of any product using
                                your device's camera, and Product Compliance
                                Scanner will rapidly retrieve the pertinent
                                compliance status information. No manual input
                                or extensive searching is required!
                            </span>
                        </div>
                        <div className="text-justify">
                            <span className=" text-lg font-semibold">
                                Extensive Database:
                            </span>
                            <span className=" mt-5 text-neutral-500 dark:text-neutral-400 text-justify">
                                testlabhub covers an extensive range of
                                products, tracking millions of items from
                                diverse industries. From electronics to
                                cosmetics, household goods to food items, you'll
                                find comprehensive compliance details at your
                                fingertips.
                            </span>
                        </div>
                        <div className="text-justify">
                            <span className=" text-lg font-semibold">
                                Compliance Status:
                            </span>
                            <span className=" mt-5 text-neutral-500 dark:text-neutral-400 text-justify">
                                Get instant access to essential compliance
                                details, including certifications, safety
                                standards, and regulatory approvals. Identify
                                any potential risks or non-compliance issues,
                                enabling you to make informed decisions about
                                the products you buy or sell.
                            </span>
                        </div>
                        <div className="text-justify">
                            <span className="text-lg font-semibold">
                                User-Friendly Interface:
                            </span>
                            <span className=" text-neutral-500 dark:text-neutral-400 text-justify">
                                testlabhub offers a sleek and intuitive
                                interface, making it easy to navigate and obtain
                                the information you need. Enjoy a seamless
                                scanning experience with accurate and real-time
                                results.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SectionOurFeatures;
