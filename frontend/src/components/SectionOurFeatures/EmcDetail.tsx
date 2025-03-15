import React, { FC } from "react";
import rightImgPng from "images/custom/our_team/best_team.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
    className?: string;
    rightImg?: string;
    type?: "type1" | "type2";
}

const EmcDetail: FC<SectionOurFeaturesProps> = ({
    className = "lg:py-14",
    rightImg = rightImgPng,
    type = "type1",
}) => {
    return (
        <div>
            <div
                className={` relative flex flex-col ${
                    type === "type1" ? "lg:flex-row" : "lg:flex-row"
                } ${className}`}
                data-nc-id="SectionOurFeatures"
            >
                <div
                    className={`w-full mt-10 lg:mt-0 lg:w-4/5 ${
                        type === "type1" ? "lg:pl-16" : "lg:pr-16"
                    }`}
                >
                    <h2 className="font-semibold text-4xl mt-5 text-left">
                        Emc Overview{" "}
                    </h2>

                    <ul className="space-y-10 mt-16">
                        <li className="space-y-4">
                            <span className="block text-lg font-semibold text-left">
                                Electromagnetic Compatibility (EMC) pertains to
                                the ability of a product to function in its
                                intended environment without unacceptably
                                interfering with other products’ operation,
                                and/or for this product to be immune to
                                externally sourced phenomena. For example, a
                                cable set top box and television in a living
                                room positioned in close proximity without one
                                interfering with the other’s operation, they may
                                be considered electromagnetically compatible.
                                Compatibility refers to the ability of one
                                product to not interfere with other products in
                                its operating environment, but also refers to
                                the ability or capacity to withstand or be
                                immune to external electromagnetic influence or
                                phenomena that such product may encounter in its
                                operating environment without unacceptable
                                operation. Various regulatory and test standards
                                define limits and procedures to assess whether
                                there is lack of interference, as well as
                                criteria for a product’s immunity from external
                                influence in its operating environment.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`nc-SectionOurFeatures relative flex flex-col ${
                    type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${className}`}
                data-nc-id="SectionOurFeatures"
            >
                <div className="flex-grow mt-20"></div>
                <div className={`w-full flex-shrink-0 mt-10 lg:mt-0`}>
                    <h2 className="font-semibold text-4xl mt-5 text-left">
                        Our values are:{" "}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
                            <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
                                <div className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform">
                                    <iframe
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                        title="RF Exposure phenomena (mobile phone SAR Testing)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
                            <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
                                <div className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform">
                                    <iframe
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                        title="RF Exposure phenomena (mobile phone SAR Testing)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
                            <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
                                <div className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform">
                                    <iframe
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                        title="RF Exposure phenomena (mobile phone SAR Testing)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
                            <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
                                <div className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform">
                                    <iframe
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                        title="RF Exposure phenomena (mobile phone SAR Testing)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmcDetail;
