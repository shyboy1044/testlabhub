import React, { FC } from "react";
import rightImgPng from "images/custom/our_team/best_team.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
    className?: string;
    rightImg?: string;
    type?: "type1" | "type2";
}

const TeamDetail: FC<SectionOurFeaturesProps> = ({
    className = "lg:py-14",
    rightImg = rightImgPng,
    type = "type1",
}) => {
    return (
        <div>
            <div
                className={`nc-SectionOurFeatures relative flex flex-col ${
                    type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${className}`}
                data-nc-id="SectionOurFeatures"
            >
                <div className="flex-grow mt-20">
                    <span className="block text-2xl font-semibold text-left my-5">
                        Best team to help you realize your business
                    </span>
                    <NcImage src={rightImg} />
                </div>
                <div
                    className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/2 ${
                        type === "type1" ? "lg:pl-16" : "lg:pr-16"
                    }`}
                >
                    <h2 className="font-semibold text-4xl mt-5 text-left">
                        Our Team{" "}
                    </h2>

                    <ul className="space-y-10 mt-16">
                        <li className="space-y-4">
                            <div className="block text-lg font-semibold text-left">
                                For technology products that may or may not
                                intentionally transmit radio frequency energy to
                                be successfully marketed, the relevant
                                compliance concerns span the domains of
                                electromagnetic compatibility, wireless/radio,
                                product safety, and radio frequency exposure
                                among others. Common certifications that reflect
                                compliance include CE-mark, FCC, IC, UL/cUL,
                                C-Tick, to name a few.
                            </div>
                        </li>
                        <li className="space-y-4">
                            <div className="block text-lg font-semibold text-left">
                                Many small to medium sized technology
                                manufacturers may however not have the resources
                                or expertise to commit to meeting these
                                compliance requirements for their products. In
                                addition, given the myriad of product
                                development relationships that exist from
                                product design to manufacturing and marketing,
                                some manufacturers may prefer a particular
                                location to have product compliance testing
                                performed, or coordinate the compliance efforts
                                across multiple testing labs, or in certain
                                cases outsource the compliance testing
                                responsibilities entirely.
                            </div>
                        </li>
                        <li className="space-y-4">
                            <div className="block text-lg font-semibold text-left">
                                Telcron, a Limited Liability Company, was
                                founded on the principle of adding value to the
                                series of steps that technology product
                                manufacturers take to comply with the array of
                                mandatory and voluntary regulatory requirements
                                – this includes finding or booking time at
                                accredited testing labs for pre- production
                                testing, compliance management throughout the
                                product lifecycle, and other consulting
                                services.
                            </div>
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
                <div
                    className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-3/5 ${
                        type === "type1" ? "lg:pl-16" : "lg:pr-16"
                    }`}
                >
                    <h2 className="font-semibold text-4xl mt-5 text-left">
                        Our values are:{" "}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <ul className="space-y-10 mt-12">
                                <li className="space-y-1">
                                    <span className="block text-lg text-left">
                                        Global Reach and Perspective
                                    </span>
                                    <span className="block text-lg text-left">
                                        E-Business Process Core
                                    </span>
                                    <span className="block text-lg text-left">
                                        Technology Instinct
                                    </span>
                                    <span className="block text-lg text-left">
                                        People Leadership
                                    </span>
                                    <span className="block text-lg text-left">
                                        Customer Satisfaction
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-10 mt-12">
                                <li className="space-y-1">
                                    <span className="block text-lg text-left">
                                        Lifecycle Focus
                                    </span>
                                    <span className="block text-lg text-left">
                                        Execution
                                    </span>
                                    <span className="block text-lg text-left">
                                        Growth
                                    </span>
                                    <span className="block text-lg text-left">
                                        Innovation as lifeblood
                                    </span>
                                    <span className="block text-lg text-left">
                                        Corporate Citizenship
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;
