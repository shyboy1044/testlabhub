import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";

import { Helmet } from "react-helmet";

import ProductDetail from "components/SectionOurFeatures/ProductDetail";
import { NavLink, useLocation } from "react-router-dom";

export interface ResourceReferenceLinksProps {
    className?: string;
}

const ResourceReferenceLinks: FC<ResourceReferenceLinksProps> = ({
    className = "",
}) => {
    const links = [
        "FCC OET Knowledge Database",
        "FCC Basics of Unlicensed Transmitters",
        "Modular Transmitter Basics",
        "FCC Combo TX Device Guidance",
        "FCC Equipment Authorization Measurement Procedures",
        "FCC TCB Workshop – Equipment Authorization",
        "FCC Certification Application Process",
        "Steps for submittal of application of FCC Form 731",
        "MET Labs Blog",
        "TRaC Global",
        "FCC",
        "Consumer Electronics Association",
        "A2LA",
        "NVLAP",
        "IN Compliance Magazine",
        "Interference Technology",
        "Electronics Weekly",
        "UL Online Certifications Directory",
        "CTIA",
        "Bluetooth SIG",
        "BQTF",
        "WiFi Alliance",
        "R&TTE Directive",
        "EMC Directive",
        "Low Voltage Directive",
        "Industry Canada Radio, Spectrum and Telecommunications",
        "Industry Canada Radio Equipment List",
        "FCC OET Equipment Authorization",
        "GSM Association",
        "CDMA Development Group",
        "CDMA Certification Forum",
        "BSMI Marks and Labels",
        "CEPT",
        "OFCOM",
        "ERO Frequency Information System (EFIS)",
        "CENELEC",
        "ARIB",
        "ARCEP",
        "ACMA",
        "EMC Information Centre",
        "ECO",
        "OMA",
        "NFC Forum Authorized Test Lab",
        "PTCRB",
        "3GPP",
        "ETSI Mobile Communications",
        "CTIA Authorized Test Lab",
        "CTIA Certification Test Plans",
        "CTIA Certification Database",
        "Verizon Wireless Device Certification",
        "AT&T Industry & Mobility Alliance Programs",
        "WiMax Forum",
        "Global Certification Forum",
        "China’s CCC Mark: A Guide for US Exporters",
        "Agilent Solution Briefs: Test & Measurement",
        "NCER",
        "ITU ICT Statistics",
        "OECD Portal on ICT",
        "World Bank Portal on ICT",
        "RFID Journal",
        "AT&T White Paper on Hardware Development",
        "Tablet Demand and Disruption: Mobile Users Come of Age",
        "Why 50% of Products Fail EMC testing the First Time",
        "Why Tablets will become our primary computing device",
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
                                Reference Links
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
                    <title>Reference Links</title>
                </Helmet>

                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    <div>
                        <div
                            className={` relative flex flex-col lg:py-14 lg:flex-row`}
                            data-nc-id="SectionOurFeatures"
                        >
                            <div
                                className={`w-full flex-shrink-0 mt-10 lg:mt-0 `}
                            >
                                <h2 className="font-semibold text-4xl mt-5 text-left">
                                    Reference Links{" "}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                                    {" "}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResourceReferenceLinks;
