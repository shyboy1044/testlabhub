import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import rightImage from "images/custom/Consulting/lab_process.png";
import leftImage from "images/custom/Consulting/lab_matrix.png";
import { NavLink, useLocation } from "react-router-dom";
import "./consulting.css";
export interface ConsultingProps {
    className?: string;
}

const Consulting: FC<ConsultingProps> = ({ className = "" }) => {
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
                                Consulting
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
                    <title>Consulting</title>
                </Helmet>
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    <div className="border-b-2 border-red-700">
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse lg:py-14`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className="flex-grow mt-20">
                                <NcImage src={rightImage} className="mb-20" />
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="border-t-2 border-orange-200 mr-16">
                                        Offered
                                    </div>
                                    <div className="border-t-2 border-orange-600 mr-16">
                                        Not Offered
                                    </div>
                                    <div className="border-t-2 border-gray-500 mr-16">
                                        Lab Link
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`max-w-3xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/2 lg:pr-16`}
                            >
                                <h2 className="font-semibold text-4xl mt-5 text-left">
                                    Consulting{" "}
                                </h2>

                                <ul className="space-y-10 mt-16">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Every manufacturer’s challenge on
                                            product compliance is unique given
                                            the variety of product designs,
                                            target countries/markets, and
                                            standards. Telcron is committed to
                                            offer a customized solution that
                                            helps address each manufacturer’s
                                            market acceptance needs.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            The Consumer Electronics Show of
                                            January 2012 saw over 3,000
                                            exhibitors showcase 20,000+ new
                                            technology product models. Many of
                                            these product models require
                                            compliance with formal market
                                            acceptance requirements that Telcron
                                            supports to be eligible for
                                            unrestricted sale in the US, Canada,
                                            Europe, and Asia-Pacific. A major
                                            focus area of ours has been the
                                            analysis of standards based test
                                            modules by product categories – to
                                            simplify test scopes while enabling
                                            efficiencies and options to project
                                            completion.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            This analysis identifies typical
                                            compliance test modules and process
                                            undertaken per product model group
                                            at any number of competent test
                                            labs. An example case involves radio
                                            frequency product needing to meet
                                            European and North American test
                                            requirements. Other product
                                            categories in review include
                                            Smartphones, Tablet PCs, RFID
                                            systems, PC peripherals, WiFi,
                                            Networking, Netbooks/Ultrabooks, and
                                            Emerging Technology products.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Based on a location preference
                                            chosen (or not chosen), a shortlist
                                            of lab(s) with capabilities needed
                                            to fulfill the compliance objectives
                                            during the pre- certification and
                                            final certification testing phases
                                            is generated as the network chart
                                            below illustrates.
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            WorkZone ‘s project management
                                            software can be used for planning,
                                            activity coordination, and document
                                            retention associated with
                                            pre-certification and certification
                                            testing projects – at request and at
                                            no cost. A sample WorkZone project
                                            outline can be reviewed here.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className={`w-full lg:mt-0`}>
                                <ul className="space-y-4 mt-4">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            Our eSource offering is then used to
                                            compile project pricing and
                                            accompanying time to complete. The
                                            price-schedule matrix, exclusive of
                                            switching costs is shown below:
                                        </span>
                                    </li>
                                    <li className="space-y-4">
                                        <div className="table-responsive w-[95%] md:w-fit overflow-auto">
                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="lab_rat_td text-center"
                                                        >
                                                            Lab / ratings ()
                                                            {"->"}
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            colSpan={2}
                                                            className="labs_row text-center"
                                                        >
                                                            Lab A (***)
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            colSpan={2}
                                                            className="labs_row text-center"
                                                        >
                                                            Lab B (**)
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            colSpan={2}
                                                            className="labs_row text-center"
                                                        >
                                                            Lab C (***)
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            colSpan={2}
                                                            className="labs_row text-center"
                                                        >
                                                            Lab D (****)
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            colSpan={2}
                                                            className="labs_row text-center"
                                                        >
                                                            Lab E (*****)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            Test Standart / Item
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Price/$
                                                        </td>
                                                        <td className="schedule">
                                                            Schedule/
                                                            <span className="d_b">
                                                                days
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Price/$
                                                        </td>
                                                        <td className="schedule">
                                                            Schedule/
                                                            <span className="d_b">
                                                                days
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Price/$
                                                        </td>
                                                        <td className="schedule">
                                                            Schedule/
                                                            <span className="d_b">
                                                                days
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Price/$
                                                        </td>
                                                        <td className="schedule">
                                                            Schedule/
                                                            <span className="d_b">
                                                                days
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Price/$
                                                        </td>
                                                        <td className="schedule">
                                                            Schedule/
                                                            <span className="d_b">
                                                                days
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            FCC Part 15/RRS 210
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            2500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                    </tr>
                                                    <tr className="empty_row">
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            EN 300 330-1,-2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2200
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                    </tr>
                                                    <tr className="empty_row">
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            EN 50364/EN 50357
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            2000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                    </tr>
                                                    <tr className="empty_row">
                                                        <th></th>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            EN 301 489-1/3
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            3000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            4
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            5000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            5
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            4000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            4500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            4
                                                        </td>
                                                    </tr>
                                                    <tr className="empty_row">
                                                        <th></th>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            EN/IES 60950-1
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            3500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            5
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            0
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3500
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            3
                                                        </td>
                                                    </tr>
                                                    <tr className="empty_row">
                                                        <th></th>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                        <td className="px-6 py-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="lab_rat_td">
                                                            Certification
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            1100
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            5
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            1000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            7
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            1050
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            7
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            900
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            6
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            1200
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            7
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            And one lab or more labs may be
                                            selected based on a number of
                                            options criteria – least switching,
                                            least cost, least time to
                                            completion, and lab rating.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className="flex-grow">
                                <NcImage src={leftImage} className="mb-20" />
                            </div>
                            <div
                                className={`w-full flex-shrink-0 lg:mt-0 lg:w-4/5 ml-10`}
                            >
                                <div className="text-xl font-semibold mb-5">
                                    Lab Matrix Overview
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <span className="ms-1 mb-5 text-lg font-semibold text-gray-500 md:ms-2 dark:text-gray-400">
                                            Selection By Least Lab Switching
                                        </span>
                                        <div className="mt-4">
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#F0CF96",
                                                }}
                                            ></span>
                                            <span>
                                                FCC Part 15/RSS 210 @ Lab D
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#C18E54",
                                                }}
                                            ></span>
                                            <span>EN 300 330-1,2 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#E1B67B",
                                                }}
                                            ></span>
                                            <span>
                                                EN 50364/EN50357 @ Lab D
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#9B0405",
                                                }}
                                            ></span>
                                            <span>EN 301 489-1/3 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#8A8A8A",
                                                }}
                                            ></span>
                                            <span>EN/IEC 60950-1 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "white",
                                                    border: "1px solid black",
                                                }}
                                            ></span>
                                            <span>Certification @ Lab D</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="ms-1 mb-5 text-lg font-semibold text-gray-500 md:ms-2 dark:text-gray-400">
                                            Selection By Least Time To
                                            Completion
                                        </span>
                                        <div className="mt-4">
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#F0CF96",
                                                }}
                                            ></span>
                                            <span>
                                                FCC Part 15/RSS 210 @ Lab D
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#C18E54",
                                                }}
                                            ></span>
                                            <span>EN 300 330-1,2 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#E1B67B",
                                                }}
                                            ></span>
                                            <span>
                                                EN 50364/EN50357 @ Lab D
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#9B0405",
                                                }}
                                            ></span>
                                            <span>EN 301 489-1/3 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#8A8A8A",
                                                }}
                                            ></span>
                                            <span>EN/IEC 60950-1 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "white",
                                                    border: "1px solid black",
                                                }}
                                            ></span>
                                            <span>Certification @ Lab D</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="ms-1 mb-5 text-lg font-semibold text-gray-500 md:ms-2 dark:text-gray-400">
                                            Selection By Lowest Cost Option
                                        </span>
                                        <div className="mt-4">
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#F0CF96",
                                                }}
                                            ></span>
                                            <span>
                                                FCC Part 15/RSS 210 @ Lab A
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#C18E54",
                                                }}
                                            ></span>
                                            <span>
                                                FCC Part 15/RSS 210 @ Lab A
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#E1B67B",
                                                }}
                                            ></span>
                                            <span>
                                                FCC Part 15/RSS 210 @ Lab A
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#9B0405",
                                                }}
                                            ></span>
                                            <span>EN 301 489-1/3 @ Lab A</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#8A8A8A",
                                                }}
                                            ></span>
                                            <span>EN/IEC 60950-1 @ Lab D</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "white",
                                                    border: "1px solid black",
                                                }}
                                            ></span>
                                            <span>Certification @ Lab C</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="ms-1 mb-5 text-lg font-semibold text-gray-500 md:ms-2 dark:text-gray-400">
                                            Selection By Lab Rating
                                        </span>
                                        <div className="mt-4">
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#F0CF96",
                                                }}
                                            ></span>
                                            <span>
                                                FCC Part 15/RSS 210 @ Lab E
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#C18E54",
                                                }}
                                            ></span>
                                            <span>EN 300 330-1,2 @ Lab E</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#E1B67B",
                                                }}
                                            ></span>
                                            <span>
                                                EN 50364/EN50357 @ Lab D
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#9B0405",
                                                }}
                                            ></span>
                                            <span>EN 301 489-1/3 @ Lab E</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "#8A8A8A",
                                                }}
                                            ></span>
                                            <span>EN/IEC 60950-1 @ Lab E</span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    display: "inline-block",
                                                    marginRight: "12px",
                                                    backgroundColor: "white",
                                                    border: "1px solid black",
                                                }}
                                            ></span>
                                            <span>Certification @ Lab E</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` relative flex flex-col lg:flex-row-reverse`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className={`w-full lg:mt-0`}>
                                <ul className="space-y-4 mt-4">
                                    <li className="space-y-4">
                                        <span className="block text-lg font-semibold text-left">
                                            A project critical path with an
                                            estimated schedule is constructed
                                            assuming Lab D was selected based on
                                            the least lab switching criterion.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`hidden lg:block relative flex flex-col lg:flex-row-reverse`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div className={`w-full lg:mt-0`}>
                                <div className="consulting_scheme">
                                    <div className="scheme_content">
                                        <span className="top_text">Days</span>

                                        <div className="position-relative">
                                            <span className="horizon_ruler">
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                                <span className="vertical_ruler"></span>
                                            </span>
                                            <span className="horizon_ruler"></span>
                                            <span className="horizon_ruler"></span>
                                            <span className="horizon_ruler"></span>
                                            <span className="horizon_ruler">
                                                <span className="finish"></span>
                                            </span>
                                            <span className="horizon_ruler m-r_0"></span>
                                            <div className="es">
                                                <span>Es</span>
                                                <span className="category_circle first">
                                                    Critical
                                                </span>
                                                <span className="category_circle">
                                                    Flexible
                                                </span>
                                                <span className="category_circle">
                                                    Events
                                                </span>
                                            </div>
                                        </div>
                                        <span className="bottom_text">
                                            Weeks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Consulting;
