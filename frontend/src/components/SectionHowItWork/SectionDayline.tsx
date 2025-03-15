import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import HIW1img from "images/HIW1.png";
import HIW2img from "images/HIW2.png";
import HIW3img from "images/HIW3.png";
import VectorImg from "images/VectorHIW.svg";
import { NavLink, useLocation } from "react-router-dom";

export interface SectionDaylineProps {
    className?: string;
    data?: {
        id: number;
        title: string;
        desc: string;
        img: string;
        imgDark?: string;
    }[];
}

const DEMO_DATA: SectionDaylineProps["data"] = [
    {
        id: 1,
        img: HIW1img,
        title: "Book & relax",
        desc: "Let each trip be an inspirational journey, each room a peaceful space",
    },
    {
        id: 2,
        img: HIW2img,
        title: "Smart checklist",
        desc: "Let each trip be an inspirational journey, each room a peaceful space",
    },
    {
        id: 3,
        img: HIW3img,
        title: "Save more",
        desc: "Let each trip be an inspirational journey, each room a peaceful space",
    },
];

const SectionDayline: FC<SectionDaylineProps> = ({
    className = "",
    data = DEMO_DATA,
}) => {
    return (
        <div
            className={`nc-SectionHowItWork  ${className}`}
            data-nc-id="SectionHowItWork"
        >
            <div
                className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between`}
            >
                <div className="text-center w-full max-w-3xl mx-auto">
                    <h2
                        className={`text-3xl md:text-4xl font-semibold max-w-2xl`}
                    >
                        Reserve Lab for Precertification Testing
                    </h2>

                    <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400 text-justify max-w-4xl">
                        There’s a 50% chance that products fail Electromagnetic
                        Compatibility (EMC) tests the first time, according to
                        at least one leading industry expert. These realities
                        make pre-certification testing a recommended step before
                        committing to final certification efforts for many
                        technology products, with the benefit of improved
                        confidence during certification tests, and reduced risk
                        of redesign at significant time and cost that hampers
                        product launch to market.
                    </span>
                    <div className="mt-3 flex flex-row justify-end">
                        <span className="flex-start block mt-6 text-neutral-500 dark:text-neutral-700">
                            For more information
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="text-red-600 dark:text-neutral-300 hover:text-black dark:hover:text-white pl-5 underline"
                                to="/reserve-lab"
                            >
                                click here
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-20 relative grid md:grid-cols-3 gap-20">
                <img
                    className="hidden md:block absolute inset-x-0 top-10"
                    src={VectorImg}
                    alt=""
                />
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col items-center max-w-xs mx-auto"
                    >
                        {item.imgDark ? (
                            <>
                                <NcImage
                                    containerClassName="dark:hidden block mb-8 max-w-[200px] mx-auto"
                                    src={item.img}
                                />
                                <NcImage
                                    containerClassName="hidden dark:block mb-8 max-w-[200px] mx-auto"
                                    src={item.imgDark}
                                />
                            </>
                        ) : (
                            <NcImage
                                containerClassName="mb-8 max-w-[200px] mx-auto"
                                src={item.img}
                            />
                        )}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionDayline;
