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
export interface OurPartnersProps {
    className?: string;
}

const OurPartners: FC<OurPartnersProps> = ({ className = "" }) => {
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
                                Our Partners
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
                    <title>Our Partners</title>
                </Helmet>
                <div className="container  my-24  lg:mb-28">
                    <h2 className="font-semibold text-4xl mt-15 text-left mb-10">
                        Our Partners{" "}
                    </h2>
                    <div className="text-xl">
                        Telcron’s solution is enabled through offerings from
                        several collaborators:
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 mt-10 sm:grid-cols-1">
                        <div className="banner pr-10 mt-10">
                            <div className="img-bar">
                                <img
                                    src={image1}
                                    alt="sap-ariba"
                                    title="SAP Ariba"
                                />
                            </div>
                            <div className="text-bar mt-6">
                                <p className="text-lg">
                                    Ariba’s eCommerce platform is used by over
                                    700,000 suppliers, and its suite of
                                    eCommerce solutions handle over $340 bn in
                                    transactions per year. Telcron’s eSource
                                    offering utilizes Ariba’s StartSourcing,
                                    part of Ariba’s Spend Management solution.
                                </p>
                            </div>
                        </div>
                        <div className="banner pr-10 mt-10">
                            <div className="img-bar">
                                <img
                                    src={image2}
                                    alt="sap-ariba"
                                    title="SAP Ariba"
                                />
                            </div>
                            <div className="text-bar mt-6">
                                <p className="text-lg">
                                    Techstreet, a unit of Thomson Reuters has
                                    over 500,000 codes and standards from over
                                    350 authorities in its online database, some
                                    of which may be accessible to Telcron’s
                                    clients through its subscription. This
                                    includes standards from IEEE, IEC, ANSI,
                                    CSA, BS EN among others that apply to
                                    technology products.
                                </p>
                            </div>
                        </div>
                        <div className="banner pr-10 mt-10">
                            <div className="img-bar">
                                <img
                                    src={image3}
                                    alt="sap-ariba"
                                    title="SAP Ariba"
                                />
                            </div>
                            <div className="text-bar mt-6">
                                <p className="text-lg">
                                    WorkZone’s intuitive project management
                                    platform allows Telcron’s customers to view
                                    project status, and share other project
                                    related documents before, during, and after
                                    project start online regardless of test labs
                                    utilized.
                                </p>
                            </div>
                        </div>
                        <div className="banner pr-10 mt-10">
                            <div className="img-bar">
                                <img
                                    src={image4}
                                    alt="sap-ariba"
                                    title="SAP Ariba"
                                />
                            </div>
                            <div className="text-bar mt-6">
                                <p className="text-lg">
                                    Telcron’s first in class booking tool for
                                    pre-certification compliance testing
                                    services offers a simple, convenient tool
                                    for bookings in the US, Canada, China,
                                    Japan, Taiwan, Australia, and New Zealand.
                                    Some of the finest hotels around the world
                                    that include Seaport Boston, Cambridge
                                    Suites Halifax, and Avila Hotel Curacao
                                    utilize b4Checkin’s solutions.
                                </p>
                            </div>
                        </div>
                        <div className="banner pr-10 mt-10">
                            <div className="img-bar">
                                <img
                                    src={image5}
                                    alt="sap-ariba"
                                    title="SAP Ariba"
                                />
                            </div>
                            <div className="text-bar mt-6">
                                <p className="text-lg">
                                    Telcron is a proud member of the Allied
                                    Business Network which brings the industry’s
                                    most competitive corporate discounts to your
                                    fingertips. Featured discounts include:
                                </p>
                            </div>
                            <ul className="text-md list-disc mt-10">
                                <li>
                                    {" "}
                                    Exclusive coupons and discounts at national
                                    business retailers and service providers
                                    available only to ABN Members.
                                </li>
                                <li>
                                    {" "}
                                    Free Membership in Hertz Gold (a $60 value!)
                                    plus Hertz discounts of up to 20%. PLUS,
                                    earn free rental days when you sign up for
                                    Hertz Business Rewards.
                                </li>

                                <li>
                                    {" "}
                                    Save up to 85% on core office supplies from
                                    Office Depot, plus save an average of 10% on
                                    other already discounted items.
                                </li>

                                <li>
                                    {" "}
                                    15% off printing & copying at FedEx Office
                                    through FedEx Office Print Online.
                                </li>

                                <li>
                                    {" "}
                                    UPS Shipping discounts through the UPS Small
                                    Business Program and 10% off The UPS Store
                                    purchases.
                                </li>
                                <li>
                                    {" "}
                                    10% 4imprint discount on all promotional
                                    items.
                                </li>
                                <li>
                                    {" "}
                                    Other resources such as saving tips and
                                    cost-cutting methods for your business.
                                </li>
                            </ul>
                        </div>
                        <div className="banner pr-10 mt-10">
                            <div className="img-bar">
                                <img
                                    src={image6}
                                    alt="sap-ariba"
                                    title="SAP Ariba"
                                />
                            </div>
                            <div className="text-bar mt-6">
                                <p className="text-lg">
                                    Telcron’s partnership with WorldTravel Inc.
                                    brings the service excellence of the 4th
                                    largest independently owned US based Travel
                                    Management company to Telcron’s family of
                                    customers and lab network. Our customers can
                                    enjoy the benefits of the most experienced
                                    agents, the highest standards of customer
                                    service, and the tools to achieve maximum
                                    cost efficiencies while easing the burden of
                                    travel arrangements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurPartners;
