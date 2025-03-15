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
import image1 from "images/custom/ourPartners/sap-ariba-vector-logo.png";
import image2 from "images/custom/ourPartners/techstreet.png";
import image3 from "images/custom/ourPartners/b4checkin.png";
import image4 from "images/custom/ourPartners/rk4tmdmjhvfkfwqt0vce.png";
import image5 from "images/custom/ourPartners/Abn.png";
import image6 from "images/custom/ourPartners/worldTravel_logo.png";
export interface OurCapabilitiesProps {
    className?: string;
}

const OurCapabilities: FC<OurCapabilitiesProps> = ({ className = "" }) => {
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
                                to="/about/our-team"
                            >
                                About
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
                                Our Capabilities
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
                    <title>Our Capabilities</title>
                </Helmet>
                <div className="container   my-24  lg:mb-28">
                    <h2 className="font-semibold text-4xl mt-15 text-left mb-10">
                        Our Capabilities{" "}
                    </h2>
                    <div className="text-xl max-w-4xl">
                        Telcron connects technology manufacturers with test labs
                        that are proficient in their testing needs. Since many
                        standards tend to be written for several product
                        categories, it’s important to distill these standards
                        into modules that apply to specific product groups – to
                        simplify the project scoping process into manageable
                        chunks for the manufacturer and the lab. Manufacturers
                        can then choose to work with labs that are proficient in
                        each relevant area.
                    </div>
                    <div className="text-xl mt-6 max-w-4xl">
                        For instance, a breakdown of tests applicable to a 13.56
                        MHz Radio Frequency Identification (RFID) reader has
                        been done below to FCC Part 15/RSS 210, UL/CSA 60950-1,
                        and harmonized EU standards. Each of the broken down
                        modules are likely to be completed within a half hour to
                        four hours per product operating mode under normal
                        circumstances in planning a test program. It’s possible
                        that not all of these tests apply to each RFID product
                        due to design variations. Product design documentation
                        may need to be reviewed as part of the compliance
                        effort. A manufacturer can hypothetically select lab ABC
                        to satisfy the North American FCC/IC test requirements
                        chunk and lab XYZ to satisfy the North American UL/cUL
                        and European CE test requirements chunk.
                    </div>
                    <div className="w-[90%] sm:w-fit overflow-auto">
                        <table className="table w-full mt-20">
                            <thead className="border">
                                <tr className="my-6 border-2">
                                    <th scope="col" className="text-left py-3">
                                        Region
                                    </th>
                                    <th scope="col" className="text-left py-3">
                                        Test Type
                                    </th>
                                    <th scope="col" className="text-left py-3">
                                        Test Category
                                    </th>
                                    <th scope="col" className="text-left py-3">
                                        Applicable Req (s)
                                    </th>
                                    <th scope="col" className="text-left py-3">
                                        Key
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="my-6">
                                    <td></td>
                                    <td className="head_name font-bold">
                                        NORTH AMERICA (FCC/IC)
                                    </td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM</td>
                                    <td>
                                        Radiated Emissions {"<30"} MHz, TX +
                                        sidebands mask
                                    </td>
                                    <td>FCC/IC, Emissions</td>
                                    <td>@15.225, 15.209/RSS 210</td>
                                    <td className="box_color_1 bg-red-300"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM</td>
                                    <td>
                                        NARadiated Emissions {">30"} MHz
                                        (Digital Circuitry)
                                    </td>
                                    <td>FCC/IC, Emissions</td>
                                    <td>15.109, RSS 210</td>
                                    <td className="box_color_1 bg-red-300"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM</td>
                                    <td>
                                        Radiated Emissions {">30"} MHz (TX
                                        Spurious)
                                    </td>
                                    <td>FCC/IC, Emissions</td>
                                    <td>15.209, RSS 210</td>
                                    <td className="box_color_1 bg-red-300"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM</td>
                                    <td>Emissions Bandwidth</td>
                                    <td>FCC/IC, Emissions</td>
                                    <td>15.225, RSS 210</td>
                                    <td className="box_color_1 bg-red-300"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM</td>
                                    <td>Frequency Stability</td>
                                    <td>FCC/IC, Emissions</td>
                                    <td>15.225, RSS 210</td>
                                    <td className="box_color_1 bg-red-300"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM</td>
                                    <td>Conducted Emissions {"<30"} MHz</td>
                                    <td>FCC/IC, Emissions</td>
                                    <td>15.207, RSS 210</td>
                                    <td className="box_color_1 bg-red-300"></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="my-6">
                                    <td className="head_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td></td>
                                    <td className="head_name font-bold">
                                        EUROPE (CE – Mark)
                                    </td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>
                                        Radiated Emissions {"<30"} MHz, TX +
                                        sidebands mask
                                    </td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>
                                        Radiated Emissions {">30"} MHz (Digital
                                        Circuitry)
                                    </td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>
                                        Radiated Emissions {">30"} MHz (TX
                                        Spurious)
                                    </td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Conducted Emissions {"<30"} MHz</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Extreme Voltage & Temperatures</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Conducted noise on Telco Ports</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Receiver Requirements</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 300 330-1,2</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Harmonics</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-3-2 | EN 301 489</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Flicker</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-3-3 | EN 301 489</td>
                                    <td className="box_color_2 bg-orange-400"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>ESD</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-4-2 | EN 301 489</td>
                                    <td className="box_color_3 bg-blue-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>EFT</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-4-3 | EN 301 489</td>
                                    <td className="box_color_3 bg-blue-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Radiated Immunity</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-4-4 | EN 301 489</td>
                                    <td className="box_color_3 bg-blue-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Surge</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-4-2 | EN 301 489</td>
                                    <td className="box_color_3 bg-blue-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Conducted Immunity</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-4-6 | EN 301 489</td>
                                    <td className="box_color_3 bg-blue-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Voltage Dips & Interrupts</td>
                                    <td>CE-Emissions</td>
                                    <td>EN 61000-4-11 | EN 301 489</td>
                                    <td className="box_color_3 bg-blue-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>H – Field</td>
                                    <td>CE-RF Exposure</td>
                                    <td>EN 50364 (SubClause 5.1)</td>
                                    <td className="box_color_4 bg-gray-600"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>E – Field</td>
                                    <td>CE-RF Exposure</td>
                                    <td>EN 50364 (SubClause 5.1)</td>
                                    <td className="box_color_4 bg-gray-600"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">EUR</td>
                                    <td>Contact Current</td>
                                    <td>CE-RF Exposure</td>
                                    <td>EN 50364 (SubClause 5.2)</td>
                                    <td className="box_color_4 bg-gray-600"></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="my-6">
                                    <td className="head_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td></td>
                                    <td className="head_name font-bold">
                                        NORTH AMERICA (UL/cUL) | EUROPE (CE –
                                        Mark)
                                    </td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>AC Leakage (Touch Currents)</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Protective Earthing (Grounding
                                        Integrity)
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Thermal Test including blocked
                                        ventilation
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Input Power Current, VA, Power Factor
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Spacings & Separations Evaluation
                                        (wiring & mains circuit boards)
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Mains Capacitive Discharge</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Permanence of Markings</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Structure rigidity and impact testing
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Label Compliance review</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Sharp Edge Test</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Enclosure Mounting Security Test</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>AC Circuit Short Circuit Evaluation</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>DC Circuit Short Circuit Evaluation</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        High Humidity Dielectric Strength (48
                                        hour soak required)
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Product Cleaning Tests</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Stability & Drop Tests</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Spillage Test</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Container/Compartment Overflow Test</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Internal flow path leakage</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Hazards relating to gasses, dusts,
                                        flammable materials testing
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Heater control failure</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Radiation source testing</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Motor, transformer, testing/construction
                                        review
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>Plastic flammability testing</td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Telephone Networks Testing (all of
                                        Section 6 of the Standard)
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className="line_split"></td>
                                </tr>
                                <tr className="my-6">
                                    <td className=" text-left">NAM+EUR</td>
                                    <td>
                                        Connected Networks Testing (all of
                                        Section 7 of the Standard)
                                    </td>
                                    <td>UL/cUL/CE-Safety</td>
                                    <td>UL/CSA/EN 60950-1</td>
                                    <td className="box_color_5 bg-gray-200"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurCapabilities;
