import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import NcImage from "shared/NcImage/NcImage";
import teamImage from "images/custom/our_team/best_team.png";
import TeamDetail from "components/SectionOurFeatures/TeamDetail";
import { NavLink, useLocation } from "react-router-dom";

export interface RfExposureProps {
    className?: string;
}

const RfExposure: FC<RfExposureProps> = ({ className = "" }) => {
    const links = [
        "BS EN 50360",
        "BS EN 50364",
        "BS EN 50371",
        "EN 62311",
        "EN 62479",
        "ANSI/IEEE C95.1",
        "FCC OET Bulletin No. 65",
        "ICNIRP Publications",
        "ARPANSA Publications",
    ];
    return (
        <>
            <nav className="flex mt-10 ml-20" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <NavLink
                            end
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                            to={"/"}
                        >
                            <svg
                                className="w-3 h-3 me-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <NavLink
                                end
                                rel="noopener noreferrer"
                                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                to="/services/compliance-management"
                            >
                                Services
                            </NavLink>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg
                                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                Rf Exposure
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div
                className={`nc-PageAbout overflow-hidden relative ${className}`}
                data-nc-id="PageAbout"
            >
                <Helmet>
                    <title>Rf Exposure</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse lg:py-14`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className="flex-grow mt-20">
                                <span className="block text-2xl font-semibold text-left my-5">
                                    RF Exposure phenomena (mobile phone SAR
                                    Testing)
                                </span>
                                <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
                                    <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
                                    <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
                                        <div className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform">
                                            <iframe
                                                src="https://www.youtube.com/embed/HZ21DX9kA7c"
                                                title="RF Exposure phenomena (mobile phone SAR Testing)"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/2 lg:pr-16`}
                            >
                                <h2 className="font-semibold text-4xl mt-5 text-left">
                                    RF Exposure{" "}
                                </h2>

                                <ul className="space-y-10 mt-16">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            If you’ve heard about the risk of
                                            mobile phone radiation causing
                                            cancer, then you can appreciate RF
                                            exposure phenomena. While cancer
                                            risk from mobile phones is yet to be
                                            definitively proven, the current
                                            position by regulatory and industry
                                            participants is one of encouraging
                                            minimized exposure as much as
                                            possible. The health and safety
                                            concern isn’t limited to mobile
                                            phones, but extends to other devices
                                            that intentionally radiate radio
                                            energy and may come in close
                                            proximity to persons either in a
                                            workplace or public environment,
                                            such as retail Electronic Article
                                            Surveillance equipment. Microwave
                                            ovens are an obvious example of how
                                            radio energy from radiation heats up
                                            food items placed in them, where
                                            energy transfer from the radiation
                                            results in heating of the food
                                            items. Nonetheless, ionizing
                                            radiation from X- Rays with
                                            electrons split from atoms and
                                            molecules is known to carry far more
                                            significant health risks than
                                            non-ionizing radiation from radio
                                            energy, due to higher energy levels
                                            transmitted.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            The commonly used measure of the
                                            rate that radio energy is absorbed
                                            by the body is the Specific
                                            Absorption Rate or “SAR”. And
                                            depending on the product use, body
                                            part proximity, and operating
                                            frequency, different Maximum
                                            Permissible Exposure (MPE) levels
                                            are recommended or set by respective
                                            agencies based on the threshold
                                            levels that harmful biological
                                            effects are possible.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Limits and guidelines that these
                                            devices are evaluated to are issued
                                            by national and international
                                            entities as FCC OET, ICNIRP,
                                            CENELEC, ARPANSA, IEEE. Standards,
                                            guidelines and various
                                            regulatory/quasi-regulatory groups
                                            on RF exposure include:
                                        </span>
                                    </li>
                                    <li className="space-y-4 mt-20">
                                        <span className="block text-lg font-semibold text-left">
                                            Additional resources on electrical
                                            product safety may be found at:
                                        </span>
                                        {links.map((link) => (
                                            <div>
                                                <NavLink
                                                    end
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600 underline dark:text-gray-400 dark:hover:text-white"
                                                    to={"#"}
                                                >
                                                    <span
                                                        style={{
                                                            width: "8px",
                                                            height: "8px",
                                                            backgroundColor:
                                                                "#9b0405",
                                                            display: "block",
                                                            borderRadius: "50%",
                                                            marginRight: "13px",
                                                        }}
                                                    ></span>
                                                    {link}
                                                </NavLink>
                                            </div>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RfExposure;
